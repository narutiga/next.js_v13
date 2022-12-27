import { FC } from "react";
import { PageTitle } from "src/component/PageTitle/PageTitle";
import { SubNavigation } from "src/component/SubNavigation/SubNavigation";

const BlogLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <SubNavigation />
      <div className="flex-1">
        <PageTitle title="ServerComponent" />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default BlogLayout;
