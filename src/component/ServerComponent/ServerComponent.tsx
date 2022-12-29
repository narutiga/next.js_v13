/** @package */
export const ServerComponent = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

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
