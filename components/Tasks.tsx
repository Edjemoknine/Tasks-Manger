"use client";
import React, { useState } from "react";

import Task from "./Task";
import { useGlobalContext } from "@/context/GlobalContext";

import CreateModel from "./CreateModel";
import TaskForm from "./TaskForm";
import Model from "./Model";

const Tasks = ({ tasks }: any) => {
  // const { setShow } = useGlobalContext();
  const [show, setShow] = useState(false);

  return (
    <>
      <h1 className="text-2xl font-semibold my-4">All Tasks</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6  grid-cols-1">
        {tasks?.map((item: any) => (
          <Task key={item.id} item={item} />
        ))}
        <div className="border-dotted h-52 w-full border-2 flex justify-center items-center border-slate-700 rounded-xl">
          <button onClick={() => setShow(true)} className="text-slate-600">
            Add Task
          </button>
          <Model show={show} setShow={setShow}>
            <TaskForm type="Create" />
          </Model>
        </div>
      </div>
    </>
  );
};

export default Tasks;
