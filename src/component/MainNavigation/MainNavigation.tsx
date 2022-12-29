import { FC } from "react";
import Link from "next/link";

/** @package */
export const MainNavigation: FC = () => {
  return (
    <div className="flex justify-end text-gray-500">
      <Link href="/server_component" className="mr-8">
        Server Component
      </Link>
      <Link href="/image" className="mr-8">
        Image
      </Link>
      <Link href="/daisyui" className="mr-8">
        daisyUI
      </Link>
    </div>
  );
};
