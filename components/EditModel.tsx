"use client";
import TaskForm from "./TaskForm";
import Model from "./Model";
import { useEffect, useState } from "react";

const EditModel = ({ id }: any) => {
  const [task, setTask] = useState();

  useEffect(() => {
    const getTaskById = async (id: any) => {
      const res = await fetch(`http://localhost:3000/${id}`);
      const date = await res.json();
      setTask(date);
    };
    getTaskById(id);
  }, [id]);

  console.log(task);

  return (
    <Model show={true} setShow={() => {}}>
      <TaskForm setShow={() => {}} type="Update" task={"task"} />
    </Model>
  );
};

export default EditModel;
