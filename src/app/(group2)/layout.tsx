import { FC } from "react";
import { PageTitle } from "src/component/PageTitle/PageTitle";

const BlogLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col p-8 h-screen bg-sub1">
      <PageTitle title="Image" />
      <div className="w-5/6 mx-auto">{children}</div>
    </div>
  );
};

export default BlogLayout;
