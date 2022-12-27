import { FC } from "react";
import Link from "next/link";
import { MainNavigation } from "src/component/MainNavigation/MainNavigation";

/** @package */
export const Header: FC = () => {
  return (
    <div className="flex flex-col justify-between p-4 h-32 bg-main">
      <Link href="/">
        <p className="text-white text-3xl font-semibold">Next.js v13</p>
      </Link>
      <MainNavigation />
    </div>
  );
};
