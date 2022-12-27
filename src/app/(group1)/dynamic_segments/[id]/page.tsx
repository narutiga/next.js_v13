import { FC } from "react";

const Page: FC<{ params: { id: string } }> = ({ params }) => {
  return (
    <div>
      <p>{`${params} page`}</p>
      <p>動的ページ</p>
    </div>
  );
};

export default Page;
