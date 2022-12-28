import { FC } from "react";
import { PageTitle } from "src/component/PageTitle";
import { SubNavigation } from "src/component/SubNavigation";

const BlogLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <SubNavigation />
      <div>
        <PageTitle title="ServerComponent" />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default BlogLayout;
