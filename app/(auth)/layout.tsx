import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full dark:bg-slate-900 bg-slate-700 flex justify-center rounded-3xl flex-col items-center">
      {children}
    </div>
  );
};

export default layout;
