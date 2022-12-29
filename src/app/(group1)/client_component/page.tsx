import { ClientComponent } from "src/component/ClientComponent";

const Page = () => {
  return (
    <div className="px-8 pb-8">
      <h2 className="mb-8 text-xl text-sub2">Client Component</h2>
      <div className="flex">
        <div className="w-1/2">
          <ClientComponent />
        </div>
      </div>
    </div>
  );
};

export default Page;
