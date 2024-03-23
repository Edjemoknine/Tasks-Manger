"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import React, { ReactNode, useState } from "react";
type Props = {
  children: ReactNode;
};

const Model = ({ children }: Props) => {
  const { show, setShow } = useGlobalContext();

  return (
    <>
      {show && (
        <main
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50"
          //   onClick={() => setShow(false)}
        >
          <div>
            {children}
            <button onClick={() => setShow(false)}>X</button>
          </div>
        </main>
      )}
    </>
  );
};

export default Model;
