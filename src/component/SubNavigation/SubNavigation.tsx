import { FC } from "react";
import Link from "next/link";

/** @package */
export const SubNavigation: FC = () => {
  return (
    <div className="flex flex-col h-screen w-24 py-16 px-4 bg-sub1">
      <Link href="/cats" className="mb-4 text-gray-500">
        Cats
      </Link>
      <Link href="/kitten" className="mb-4 text-gray-500">
        Kitten
      </Link>
      <Link href="/dogs" className="mb-4 text-gray-500">
        Dogs
      </Link>
    </div>
  );
};
