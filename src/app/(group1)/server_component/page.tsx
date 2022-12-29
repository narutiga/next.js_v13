import { Suspense } from "react";
import { ClientComponent } from "src/component/ClientComponent";
import { ServerComponent } from "src/component/ServerComponent";

const CatsPage = () => {
  return (
    <div className="px-8 pb-8">
      <h2 className="mb-8 text-xl text-sub2">Server Component</h2>
      <div className="flex">
        <div className="w-1/2 mr-8">
          {/* @ts-expect-error Server Component */}
          <ServerComponent />
        </div>
      </div>
    </div>
  );
};

export default CatsPage;
