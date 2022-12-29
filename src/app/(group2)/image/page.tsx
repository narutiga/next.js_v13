import { FC } from "react";
import { LocalImage } from "src/component/LocalImage";
import { RemoteImg } from "src/component/RemoteImg";

const Page: FC = () => {
  return (
    <div className="w-100 p-8 bg-white">
      <h2 className="text-xl text-sub2">Local Image</h2>
      <LocalImage />
      <h2 className="text-xl text-sub2">Romote Image</h2>
      {/* @ts-expect-error Server Component */}
      <RemoteImg />
    </div>
  );
};

export default Page;
