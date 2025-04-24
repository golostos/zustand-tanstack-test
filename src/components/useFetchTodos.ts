import { useQuery } from "@tanstack/react-query";
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export function useFetchTodos() {
  return useQuery({
    queryKey: ["todos"],
    staleTime: Infinity,
    enabled: true,
    // enabled: false,
    // refetchInterval: 1000,
    refetchOnWindowFocus: false,
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json() as Promise<Todo[]>
      ).then((data) => new Promise<Todo[]>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      })),
  });
}
