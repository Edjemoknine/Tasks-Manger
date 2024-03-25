"use client";

import { useRouter } from "next/navigation";
import EditModel from "./EditModel";
import axios from "axios";
import { TrashIcon, Edit } from "lucide-react";
import Model from "./Model";
import TaskForm from "./TaskForm";
import { useState } from "react";
const Task = ({ item }: any) => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push(`?id=${item.id}`);
    setShow(true);
  };

  const DeleteTask = async () => {
    try {
      await axios.delete(`/api/task/${item.id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <div className="p-6 rounded-2xl border h-50 flex flex-col justify-between border-slate-700 dark:bg-slate-900 bg-slate-600>Task">
      <h1 className="font-medium">{item.title}</h1>
      <p className="text-xs mt-3 truncate">{item.description}</p>
      <p className="text-[10px] text-slate-500 float-right  mt-3 w-fit">
        {item.date}
      </p>
      <div className="flex gap-4 mt-4 items-center justify-between">
        <button
          className={
            item.complete
              ? "bg-green-500 rounded-xl px-4 py-2 text-xs"
              : "bg-red-500 rounded-xl px-4 py-2 text-xs"
          }
        >
          {item.complete ? "comleted" : "inCompleted"}
        </button>
        <div className="flex items-center">
          <button
            className="px-2 py-1 rounded-xl  text-xs  hover:text-slate-200"
            onClick={handleUpdate}
          >
            <Edit color="blue" />
          </button>
          <button
            onClick={DeleteTask}
            className="px-2 py-1  rounded-xl text-xs hover:text-slate-200"
          >
            <TrashIcon color="red" />
          </button>
        </div>
      </div>
      <Model show={show} setShow={setShow}>
        <TaskForm type="Update" task={item} />
      </Model>
    </div>
  );
};

export default Task;
