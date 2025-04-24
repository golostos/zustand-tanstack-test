import React, { useEffect } from "react";
import Address from "./Address";
import Name from "./Name";
import Reset from "./Reset";
import Provider from "./Provider";
import { useFetchTodos } from "./useFetchTodos";
import { useQueryClient } from "@tanstack/react-query";

export default function User() {
  const { data, remove, isLoading, refetch, isFetching, isInitialLoading } = useFetchTodos();
  const client = useQueryClient();
  useEffect(() => {
    return () => {
      remove();
    };
  }, [remove]);
  // if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <Provider>
        <pre>{JSON.stringify(data?.[0], null, 2)}</pre>
        <Name />
        <Address />
        <Reset />
        <button
          onClick={async () => {
            // refetch();
            await client.invalidateQueries(["todos"]);
            console.log("invalidateQueries done");
          }}
        >
          Refetch
        </button>
        <button
          onClick={async () => {
            client.removeQueries(["todos"]);
            console.log("removeQueries done");
            refetch();
          }}
        >
          Reset Cache
        </button>
        {isLoading ? <p>isLoading...</p> : null}
        {isInitialLoading ? <p>isInitialLoading...</p> : null}
        {isFetching ? <p>Refetching...</p> : null}
        <button onClick={() => {
          client.setQueryData(["todos"], (prev: any) => {
            return prev.map((todo: any) => {
              return {
                ...todo,
                userId: todo.userId + 1,
              };
            });
          });
        }}>Inc user id</button>
      </Provider>
    </div>
  );
}
