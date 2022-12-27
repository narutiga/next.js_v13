import { FC } from "react";

/** @package */
type Props = {
  title: string;
};

export const PageTitle: FC<Props> = (props) => {
  return <h1 className="m-8 text-sub2 text-xl font-bold">{props.title}</h1>;
};
