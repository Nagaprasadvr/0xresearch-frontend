import { GREEN_COLOR } from "@/lib/constants";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col bg-[#ccf7ff]  items-start justify-center w-full p-5 rounded-lg text-black ${className}`}
    >
      {children}
    </div>
  );
};
