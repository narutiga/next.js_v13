import Image from "next/image";

/** @package */
export const RemoteImg = async () => {
  const pictures = await fetch("https://jsonplaceholder.typicode.com/photos");
  const picturesJson = await pictures.json();

  return (
    <div className="flex w-100 p-8 justify-between bg-white">
      <div className="relative w-[45%] pt-[45%]">
        <Image src={picturesJson[0].url} alt="Green square" fill sizes="50vw" />
      </div>
      <div className="relative w-[45%] pt-[45%]">
        <Image
          src={picturesJson[1].url}
          alt="Purple square"
          fill
          sizes="50vw"
        />
      </div>
    </div>
  );
};
