import { FC } from "react";
import Link from "next/link";

/** @package */
export const MainNavigation: FC = () => {
  return (
    <div className="flex justify-end">
      <Link href="/server_component" className="mr-8 text-gray-500">
        Server Component
      </Link>
      <Link href="/image" className="mr-8 text-gray-500">
        Image
      </Link>
      <Link href="/daisyui" className="mr-8 text-gray-500">
        daisyUI
      </Link>
    </div>
  );
};
