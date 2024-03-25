"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  show: boolean;
  setShow: (e: boolean) => void;
};

const Model = ({ children, setShow, show }: Props) => {
  // const { show, setShow } = useGlobalContext();

  return (
    <>
      {/* <button onClick={() => setShow(false)}></button> */}
      {show && (
        <main className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
          <div className=" relative">
            {children}
            <button
              className="absolute -top-8 hover:bg-slate-950 hover:border-none hover:text-slate-300 -right-8 w-8 h-8  border rounded-full"
              onClick={() => setShow(false)}
            >
              X
            </button>
          </div>
        </main>
      )}
    </>
  );
};

export default Model;
