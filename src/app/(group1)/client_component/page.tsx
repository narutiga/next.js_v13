import { ClientComponent } from "src/component/ClientComponent";

const CatsPage = () => {
  return (
    <div className="p-8">
      <h2 className="mb-8 text-sub2">Client Component</h2>
      <div className="flex">
        <div className="w-1/2">
          <ClientComponent />
        </div>
      </div>
    </div>
  );
};

export default CatsPage;
