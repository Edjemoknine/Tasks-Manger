import { ThemeButton } from "@/components/ThemButton";
import React from "react";

const Now = () => {
  return (
    <main className="w-full h-full rounded-2xl dark:bg-gray-800 bg-slate-500 p-6">
      <div className="bg-slate-900 rounded-2xl p-4 flex justify-end">
        <ThemeButton />
      </div>
    </main>
  );
};

export default Now;
