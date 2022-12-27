import { Suspense } from "react";
import { ClientComponent } from "src/component/ClientComponent";
import { ServerComponent } from "src/component/ServerComponent";

const CatsPage = () => {
  return (
    <div className="p-4">
      <h2 className="m-4 text-sub2">Client Component</h2>
      <div className="flex">
        <div className="w-1/2">
          <ClientComponent />
        </div>
      </div>
    </div>
  );
};

export default CatsPage;
