const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

/** @package */
export const ServerComponent = async () => {
  const data = await fetcher("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="relative w-100 h-100">
      {data.map((user: any) => (
        <p key={user.id} className="mb-2">
          {user.name}
        </p>
      ))}
    </div>
  );
};
