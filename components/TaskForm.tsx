import { useGlobalContext } from "@/context/GlobalContext";
import axios from "axios";
import React, { FormEvent, useState } from "react";

const TaskForm = ({ type, task }: { type: string; task?: any }) => {
  const { setShow } = useGlobalContext();

  const [state, setState] = useState({ title: "", description: "", date: "" });

  const handleChange = (e: any) => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  const [isImportant, setisImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmit = async (data: FormEvent<HTMLFormElement>) => {
    data.preventDefault();
    const task = { ...state, isCompleted, isImportant };

    if (type === "Create") {
      try {
        await axios.post("/api/task", task);
      } catch (error) {
        console.log(error);
      }
    }
    // setShow(false);
  };
  return (
    <div className="w-96 p-10 z-50 dark:bg-gray-800 flex flex-col justify-between border border-slate-700 md:relative top-0 duration-300 ease-in-out  bg-slate-500 rounded-2xl ">
      <h1>{type} Task</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ex: watch tv "
          onChange={handleChange}
          value={state.title}
          name="title"
        />
        <textarea
          placeholder="Ex: watch tv "
          onChange={handleChange}
          value={state.description}
          name="description"
        />
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={state.date}
        />
        <input
          type="checkbox"
          onChange={(e) => setIsCompleted(e.target.checked)}
          value={isCompleted.toString()}
        />
        <input
          type="checkbox"
          onChange={(e) => setisImportant(e.target.checked)}
          value={isImportant.toString()}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
