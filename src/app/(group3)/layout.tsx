import { FC } from "react";
import { PageTitle } from "src/component/PageTitle/PageTitle";
import { SubNavigation } from "src/component/SubNavigation/SubNavigation";

const BlogLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col p-4 h-screen">
      <PageTitle title="Image" />
      <div className="w-5/6 mx-auto border-white">{children}</div>
    </div>
  );
};

export default BlogLayout;
