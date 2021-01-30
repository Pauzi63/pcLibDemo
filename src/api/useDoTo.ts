import axios from 'axios';
import { useQuery } from 'react-query';

const endpoint = `${process.env.REACT_APP_API_URL2}/ToDos`;

export function useGetToDoById(toDoId: string) {
  async function fetchToDoById(toDoId: string) {
    const { data } = await axios.get(`${endpoint}/${toDoId}`);
    return data;
  }

  return useQuery(
    ['GetToDoWithId', toDoId],
    async () => fetchToDoById(toDoId),
    {
      retry: 0,
    }
  );
}

export function useGetToDos() {
  async function fetchToDos() {
    const { data } = await axios.get(endpoint);
    return data;
  }

  return useQuery(['GetToDos'], async () => fetchToDos(), {
    retry: 0,
  });
}
