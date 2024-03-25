"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
type ModelType = "Create" | "Update";
const TaskForm = ({ type, task }: { type: ModelType; task?: any }) => {
  const { setShow } = useGlobalContext();
  console.log(task);
  const [state, setState] = useState({
    title: type === "Update" ? task.title : "",
    description: type === "Update" ? task.description : "",
    date: type === "Update" ? task.date : "",
  });
  const router = useRouter();
  const handleChange = (e: any) => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  const [isImportant, setisImportant] = useState(
    type === "Update" ? task.isImporatnt : false
  );
  const [isCompleted, setIsCompleted] = useState(
    type === "Update" ? task.completed : false
  );

  const onSubmit = async (data: FormEvent<HTMLFormElement>) => {
    data.preventDefault();
    const newtask = { ...state, isCompleted, isImportant };

    if (type === "Create") {
      try {
        await axios.post("/api/task", newtask);
      } catch (error) {
        console.log(error);
      }
    } else if (type === "Update") {
      try {
        await axios.put(`/api/task/${task.id}`, newtask);
      } catch (error) {
        console.log(error);
      }
    }
    setShow(false);
    router.refresh();
  };
  return (
    <div className="w-96 p-6 z-50 dark:bg-gray-800 flex flex-col justify-between border border-slate-700 md:relative top-0 duration-300 ease-in-out  bg-slate-500 rounded-2xl ">
      <h1>{type} Task</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full mt-4">
        <input
          className="px-3 py-2 rounded-xl bg-transparent border-slate-700 border shadow "
          type="text"
          placeholder="Ex: watch tv "
          onChange={handleChange}
          value={state.title}
          name="title"
        />
        <textarea
          className="px-3 py-2 rounded-xl  bg-transparent border-slate-700 border shadow"
          placeholder="Ex: watch tv "
          onChange={handleChange}
          value={state.description}
          name="description"
        />
        <input
          className="px-3 py-2 rounded-xl  bg-transparent border-slate-700 border shadow"
          type="date"
          name="date"
          onChange={handleChange}
          value={state.date}
        />
        <div className="flex justify-between gap-3 w-full">
          <div>
            <input
              type="checkbox"
              onChange={(e) => setIsCompleted(e.target.checked)}
              value={isCompleted.toString()}
            />
            <span className="ml-3">is Important ?</span>
          </div>

          <div>
            <input
              type="checkbox"
              onChange={(e) => setisImportant(e.target.checked)}
              value={isImportant.toString()}
            />
            <span className="ml-3">Completed</span>
          </div>
        </div>
        <button className="px-4 py-2 rounded-full bg-blue-500 mt-3 hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
