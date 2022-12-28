import { FC } from "react";

const BlogLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="">
      <div className="flex-1">
        <h2 className="ml-8 text-sub2">Dynamic Segments</h2>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default BlogLayout;
