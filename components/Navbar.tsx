import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="w-full h-20 justify-start flex flex-row items-center pl-5">
      <div className="flex flex-row justify-center items-center border-2 border-white p-2 rounded-lg gap-1 h-12">
        <Image src="/atom2.svg" width={30} height={30} alt="logo" />
        <p className="text-md p-1 bg-white rounded text-black font-semibold">
          OxPublish
        </p>
      </div>
    </nav>
  );
};
