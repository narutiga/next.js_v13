import { FC } from "react";
import Link from "next/link";

/** @package */
export const SubNavigation: FC = () => {
  return (
    <div className="flex flex-col h-auto w-40 py-16 px-4 bg-sub1">
      <Link href="/server_component" className="mb-8 text-gray-500">
        Server Component
      </Link>
      <Link href="/client_component" className="mb-8 text-gray-500">
        Client Component
      </Link>
      <Link href="/dynamic_segments" className="mb-8 text-gray-500">
        Dynamic Segments
      </Link>
    </div>
  );
};
