"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import EditModel from "./EditModel";
import axios from "axios";

const Task = ({ item }: any) => {
  const { setShow } = useGlobalContext();
  const router = useRouter();

  const handleUpdate = () => {
    router.push(`?id=${item.id}`);
    setShow(true);
  };

  const DeleteTask = async () => {
    try {
      await axios.delete(`/api/task/${item.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 rounded-2xl border flex flex-col justify-between border-slate-700 dark:bg-slate-900 bg-slate-600>Task">
      <h1 className="font-medium">{item.title}</h1>
      <p className="text-xs mt-3 truncate">{item.description}</p>
      <p className="text-[10px] text-slate-500 float-right  mt-3 w-fit">
        {item.date}
      </p>
      <div className="flex gap-4 mt-4">
        <button
          className="px-2 py-1 rounded-xl border border-slate-700 text-xs hover:bg-blue-700 bg-blue-500 hover:text-slate-200"
          onClick={handleUpdate}
        >
          Edit
        </button>
        <button
          onClick={DeleteTask}
          className="px-2 py-1 bg-red-500 hover:bg-red-700 rounded-xl border border-slate-700 text-xs hover:text-slate-200"
        >
          Delete
        </button>
      </div>
      <EditModel id={item.id} />
    </div>
  );
};

export default Task;
