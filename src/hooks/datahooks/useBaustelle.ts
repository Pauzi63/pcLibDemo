import axios from 'axios';
import { useQuery } from 'react-query';
import { IBaustelle } from '../../Interfaces/ResponseInterfaces';

const endpoint = `${process.env.REACT_APP_API_URL2}/baustellen`;

export function useGetBaustelleById(toDoId: string) {
  async function fetchBaustelleById(toDoId: string) {
    const { data } = await axios.get<IBaustelle>(`${endpoint}/${toDoId}`);
    return data;
  }

  return useQuery(
    ['GetBaustelleWithId', toDoId],
    async () => fetchBaustelleById(toDoId),
    {
      retry: 0,
    }
  );
}

export function useGetBaustellen() {
  async function fetchBaustellen() {
    // const { data } = await axios.get<IBaustelle[]>(endpoint); -- funktioniert nicht mit material-table {data}
    const { data } = await axios.get(endpoint);
    return data;
  }

  return useQuery(['GetBaustellen'], async () => fetchBaustellen(), {
    retry: 0,
  });
}
