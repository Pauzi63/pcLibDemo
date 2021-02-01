import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { IBaustelle } from "../interfaces/ResponseInterfaces";

const endpoint = `${process.env.REACT_APP_API_URL}/baustellen`;

export function useGetBaustelleById(id: number) {
  async function fetchBaustelleById(id: number) {
    const { data } = await axios.get<IBaustelle>(`${endpoint}/${id}`);
    return data;
  }

  return useQuery(
    ["GetBaustelleWithId", id],
    async () => fetchBaustelleById(id),
    {
      retry: 0,
    }
  );
}

export function useGetBaustellen() {
  async function fetchBaustellen() {
    // const { data } = await axios.get<IBaustelle[]>(endpoint); // funktioniert nicht mit material-table {data}
    const { data } = await axios.get(endpoint);
    return data;
  }

  return useQuery(["GetBaustellen"], async () => fetchBaustellen(), {
    retry: 0,
  });
}

// export function usePutBaustelle(payload: IBaustelle) {
//   async function putBaustelle(payload: IBaustelle) {
//     const response = await axios.put(`${endpoint}/${payload.id}`, payload);
//     return response.data;
//   }
//   const mutation = useMutation((payload) => putBaustelle(payload));
//   return mutation;
// }

export function usePostBaustelle(payload: IBaustelle) {
  const { mutateAsync } = useMutation((p) => postBaustelle(payload), {});
  return mutateAsync;
}
// const mutation = useMutation(newTodo => axios.post('/todos', newTodo))

export async function putBaustelle(payload: IBaustelle) {
  const response = await axios.put(`${endpoint}/${payload.id}`, payload);
  return response.data;
}

export async function postBaustelle(payload: IBaustelle) {
  const response = await axios.post(`${endpoint}`, payload);
  return response.data;
}
