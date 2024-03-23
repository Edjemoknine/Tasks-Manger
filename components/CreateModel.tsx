import React from "react";
import TaskForm from "./TaskForm";
import Model from "./Model";

const CreateModel = () => {
  return (
    <Model>
      <TaskForm type="Create" />
    </Model>
  );
};

export default CreateModel;
