import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen flex flex-col items-center">{children}</div>;
};

export default layout;
