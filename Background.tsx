import Image from "next/image";

export default function Background() {
  return (
    <>
      <div
        className="fixed left-1/2 top-5 z-negative h-full 
    w-full -translate-x-1/2 transform px-4 opacity-30"
      >
        <Image
          src="/icon.svg"
          alt="Logo"
          className="h-full w-full object-contain"
          width={500}
          height={0}
        />
      </div>
      <div className="z-1 fixed h-screen w-screen backdrop-blur-xl backdrop-filter"></div>
    </>
  );
}
