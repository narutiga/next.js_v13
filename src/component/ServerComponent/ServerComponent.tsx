import Image from "next/image";
import useSWR from "swr";

const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

/** @package */
export const ServerComponent = async () => {
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/users",
  //   fetcher
  // );

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  const data = await fetcher("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="relative w-100 h-100">
      {data.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};
