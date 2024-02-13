import Image from "next/image";

export default function Background() {
  return (
    <div
      className="fixed h-screen w-screen top-16 left-1/2 
    transform -translate-x-1/2 z-negative opacity-30"
    >
      <Image src="/icon.svg" alt="Logo" layout="fill" objectFit="contain" />
    </div>
  );
}
