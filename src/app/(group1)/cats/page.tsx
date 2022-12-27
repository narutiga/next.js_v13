import { Suspense } from "react";
import { ClientComponent } from "src/component/ClientComponent";
import { ServerComponent } from "src/component/ServerComponent";

const CatsPage = () => {
  return (
    <div className="p-4">
      <h2 className="m-4 text-sub2">Cats</h2>
      <div className="flex">
        <div className="w-1/2 mr-8">
          {/* @ts-expect-error Server Component */}
          <ServerComponent />
        </div>
        <div className="w-1/2">
          <ClientComponent />
        </div>
      </div>
    </div>
  );
};

export default CatsPage;
