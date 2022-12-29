import { FC } from "react";

/** @package */
type Props = {
  title: string;
};

export const PageTitle: FC<Props> = (props) => {
  return <h1 className="m-8 text-2xl text-sub2 font-bold">{props.title}</h1>;
};
