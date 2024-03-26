"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Model from "./Model";
import TaskForm from "./TaskForm";
import { Plus } from "lucide-react";

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return;
  return (
    <div className="flex md:gap-6 gap-3 items-center">
      <div className="border-dotted w-12 h-12 border-2 flex justify-center items-center border-slate-700 rounded-xl">
        <button onClick={() => setShow(true)} className="text-slate-600">
          <Plus />
        </button>
        <Model show={show} setShow={setShow}>
          <TaskForm setShow={setShow} type="Create" />
        </Model>
      </div>

      <button
        className="rounded-xl  border h-10 flex justify-center items-center w-10 shadow-lg"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? <Sun /> : <MoonStar />}
      </button>
      <UserButton />
    </div>
  );
};
