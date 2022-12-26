import { FC } from "react";
import Link from "next/link";

/** @package */
export const MainNavigation: FC = () => {
  return (
    <div className="flex mb-8 mx-8">
      <Link href="/cats" className="mr-8 text-gray-500">
        Group1
      </Link>
      <Link href="/bar" className="mr-8 text-gray-500">
        Group2
      </Link>
      <Link href="/baz" className="mr-8 text-gray-500">
        Group3
      </Link>
    </div>
  );
};