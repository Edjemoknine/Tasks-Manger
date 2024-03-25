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
      <div className="task_Container grid pr-3 lg:grid-cols-3 gap-4 mt-3  grid-cols-1 max-h-[70vh] overflow-y-auto">
        {tasks?.map((item: any) => (
          <Task key={item.id} item={item} />
        ))}
        <div className="border-dotted min-h-52 w-full border-2 flex justify-center items-center border-slate-700 rounded-xl">
          <button onClick={() => setShow(true)} className="text-slate-600">
            Add Task
          </button>
          <Model show={show} setShow={setShow}>
            <TaskForm setShow={setShow} type="Create" />
          </Model>
        </div>
      </div>
    </>
  );
};

export default Tasks;
