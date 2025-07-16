import React from "react";

type Props = {
  children: React.ReactNode;
};

const BoxText: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-6 py-3 w-40 max-w-md text-center rounded-lg bg-green-100 text-green-700 font-semibold shadow-md border border-green-400">
      {children}
    </div>
  );
};

export default BoxText;
