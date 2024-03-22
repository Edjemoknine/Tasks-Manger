"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Links = [
  { label: "Tasks", href: "/", icon: "" },
  { label: "Completed", href: "/completed", icon: "" },
  { label: "Important", href: "/importatnt", icon: "" },
  { label: "Do it Now", href: "/now", icon: "" },
];

const SideBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowSize);
  return (
    <>
      <nav className="w-96 dark:bg-gray-800 flex flex-col justify-between border border-slate-700 md:relative top-0 duration-300 ease-in-out  bg-slate-500 rounded-2xl ">
        <div className="flex flex-col gap-3 p-6  items-center">
          <Image
            src={"/logo.jpg"}
            className="rounded-full object-contain"
            width={100}
            height={100}
            alt="Avatar"
          />
          <h1 className="flex flex-col  text-center md:text-lg">
            <span>Moknine</span>
            <span>Elhadj</span>
          </h1>
        </div>
        <div className="flex flex-col gap-3 text-center items-center ">
          {Links.map((link) => (
            <Link
              className={`${
                pathname === link.href
                  ? "text-blue-600 bg-slate-700 font-semibold border-r-4 border-blue-500"
                  : ""
              } px-4 py-2 hover:bg-blue-900  w-full duration-300`}
              href={link.href}
              key={link.label}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-6 text-center items-center pb-6 ">
            <Link
              className={`${
                pathname === "/login"
                  ? "text-blue-600 bg-slate-700 font-semibold border-r-4 border-blue-500"
                  : ""
              } px-4 py-2 hover:bg-blue-900  w-full duration-300`}
              href="/login"
            >
              Login
            </Link>
            <Link
              className={`${
                pathname === "/register"
                  ? "text-blue-600 bg-slate-700 font-semibold border-r-4 border-blue-500"
                  : ""
              } px-4 py-2 hover:bg-blue-900  w-full duration-300`}
              href="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
