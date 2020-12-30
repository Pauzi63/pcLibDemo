import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { IBaustelle } from '../../Interfaces/ResponseInterfaces';

const endpoint = `${process.env.REACT_APP_API_URL2}/baustellen`;

export function useGetBaustelleById(id: number) {
  async function fetchBaustelleById(id: number) {
    const { data } = await axios.get<IBaustelle>(`${endpoint}/${id}`);
    return data;
  }

  return useQuery(
    ['GetBaustelleWithId', id],
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

  return useQuery(['GetBaustellen'], async () => fetchBaustellen(), {
    retry: 0,
  });
}

export function usePutBaustelle(payload: any) {
  async function putBaustelle(payload: any) {
    const response = await axios.put(`${endpoint}/${payload.id}`, payload);
    return response.data;
  }
  const mutation = useMutation((payload) => putBaustelle(payload));
  return mutation;
}

// const mutation = useMutation(newTodo => axios.post('/todos', newTodo))

export async function putBaustelle(payload: IBaustelle) {
  const response = await axios.put(`${endpoint}/${payload.id}`, payload);
  return response.data;
}
