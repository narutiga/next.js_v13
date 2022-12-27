import { FC } from "react";

const Page: FC<{ params: { id: string } }> = ({ params }) => {
  return (
    <div>
      <p>{`${params} page`}</p>
      <p>ここは動的ページの練習</p>
    </div>
  );
};

export default Page;
