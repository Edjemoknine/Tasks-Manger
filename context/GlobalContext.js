"use client";

import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "next-themes";
const GlobalContext = createContext(null);
const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="flex h-screen p-10 gap-10 ">{children}</div>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);