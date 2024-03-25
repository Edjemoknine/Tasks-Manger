import Tasks from "@/components/Tasks";
import { ThemeButton } from "@/components/ThemButton";
import { unstable_noStore } from "next/cache";

unstable_noStore();

const getTasks = async () => {
  const res = await fetch("http://localhost:3000/api/task", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
export default async function Home() {
  const tasks = await getTasks();

  return (
    <main className="w-full h-full rounded-2xl dark:bg-gray-800 bg-slate-500 p-6">
      <div className="bg-slate-900 rounded-2xl p-4 flex justify-end">
        <ThemeButton />
      </div>
      <Tasks tasks={tasks} />
    </main>
  );
}
