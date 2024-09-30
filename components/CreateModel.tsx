import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Model from "./Model";

const CreateModel = () => {
  const [show, setshow] = useState(false);
  return (
    <Model show={show} setShow={setshow}>
      <TaskForm setShow={setshow} type="Create" />
    </Model>
  );
};

export default CreateModel;
