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
    <main>
      <h1 className="text-xl font-semibold my-4">All Tasks</h1>
      <Tasks tasks={tasks} />
    </main>
  );
}
