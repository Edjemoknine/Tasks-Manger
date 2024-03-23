"use client";
import React from "react";

import Task from "./Task";
import { useGlobalContext } from "@/context/GlobalContext";

import CreateModel from "./CreateModel";

const Tasks = ({ tasks }: any) => {
  const { setShow } = useGlobalContext();
  return (
    <>
      <h1 className="text-2xl font-semibold my-4">All Tasks</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6 sm:grid-cols-2">
        {tasks.map((item: any) => (
          <Task key={item.id} item={item} />
        ))}
        <div className="border-dotted border-2 flex justify-center items-center border-slate-700 rounded-xl">
          <button onClick={() => setShow(true)} className="text-slate-600">
            Add Task
          </button>
          <CreateModel />
        </div>
      </div>
    </>
  );
};

export default Tasks;
