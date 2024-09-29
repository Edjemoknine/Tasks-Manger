import React from "react";
import TaskForm from "./TaskForm";
import Model from "./Model";

const CreateModel = () => {
  const [show, setShow] = React.useState(false);

  return (
    <Model show={show} setShow={setShow}>
      <TaskForm type="Create" setShow={setShow} />
    </Model>
  );
};

export default CreateModel;
