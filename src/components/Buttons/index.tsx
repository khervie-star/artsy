export const PurpleButton = ({ children, onClick, type }: any) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-[#3341C1] w-[120px] h-[50px] rounded-[4px] flex justify-center items-center font-satoshi text-white font-semibold text-[20px]">
      {children}
    </button>
  );
};
