import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { IBaustelle } from "../interfaces/ResponseInterfaces";

const endpoint = `${process.env.REACT_APP_API_URL_FAKE}/baustellen`;

// alle Records lesen
export function useGetBaustellen() {
  async function fetchBaustellen() {
    const { data } = await axios.get<IBaustelle[]>(endpoint); // funktioniert nicht mit material-table {data}
    // const { data } = await axios.get(endpoint);
    return data;
  }

  return useQuery(["GetBaustellen"], async () => fetchBaustellen(), {
    retry: 0,
  });
}

// bestimmten Record lesen
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

// Datensatz einfügen
export async function postBaustelle(payload: IBaustelle) {
  const response = await axios.post(`${endpoint}`, payload);
  return response.data;
}

// Datensatz updaten
export async function putBaustelle(payload: IBaustelle) {
  const response = await axios.put(`${endpoint}/${payload.id}`, payload);
  return response.data;
}

// Datensatz löschen
export async function deleteBaustelle(id: number) {
  const response = await axios.delete(`${endpoint}/${id}`);
  return response.data;
}
