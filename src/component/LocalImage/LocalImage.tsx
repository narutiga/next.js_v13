import { FC } from "react";
import Image from "next/image";
import narugaPic from "public/naruga.jpg";
import tigaPic from "public/tiga.jpg";

/** @package */
export const LocalImage: FC = () => {
  return (
    <div className="flex w-100 p-8 justify-between bg-white">
      <div className="relative w-[45%] pt-[45%]">
        <Image
          src={narugaPic}
          alt="Picture of naruga"
          fill
          priority
          sizes="50vw"
        />
      </div>
      <div className="relative w-[45%] pt-[45%]">
        <Image src={tigaPic} alt="Picture of tiga" fill priority sizes="50vw" />
      </div>
    </div>
  );
};
