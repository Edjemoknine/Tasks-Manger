"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return;
  return (
    <div className="flex gap-4 items-center">
      <UserButton />

      <button
        className="rounded-xl  border h-10 flex justify-center items-center w-10 shadow-lg"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? <Sun /> : <MoonStar />}
      </button>
    </div>
  );
};
