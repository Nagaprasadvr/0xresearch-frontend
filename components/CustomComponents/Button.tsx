export const Button = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="button"
      className="inline-block rounded bg-white px-4 py-2 text-md font-semibold leading-normal text-black shadow-dark-3 transition duration-150 ease-in-out hover:bg-white-700 hover:shadow-dark-2 focus:bg-white-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-white-900 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong
      hover:scale-110
      ease-in-out
      "
    >
      {children}
    </button>
  );
};
