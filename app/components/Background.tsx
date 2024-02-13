import Image from "next/image";

export default function Background() {
  return (
    <>
      <div
        className="fixed h-full w-full top-16 left-1/2 
    transform -translate-x-1/2 z-negative opacity-30 px-4"
      >
        <Image
          src="/icon.svg"
          alt="Logo"
          className="w-full h-full object-contain"
          width={500}
          height={0}
        />
      </div>
      <div className="fixed h-screen w-screen backdrop-filter backdrop-blur-xl z-1"></div>
    </>
  );
}
