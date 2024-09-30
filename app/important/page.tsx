import Task from "@/components/Task";
import Tasks from "@/components/Tasks";
import { ThemeButton } from "@/components/ThemButton";
import React from "react";

const getTasks = async () => {
  const res = await fetch("http://localhost:3000/api/task", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
export default async function Completed() {
  const tasks = await getTasks();

  const importantTasks = tasks.filter((task: any) => task.isImporatnt);

  return (
    <>
      <h1 className="text-xl font-semibold my-4">Important Tasks!</h1>
      <div className="task_Container h-[70vh] grid pr-3 lg:grid-cols-3 gap-4 mt-3  grid-cols-1 min-h-[70vh] overflow-y-auto">
        {importantTasks?.map((item: any) => (
          <Task key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
