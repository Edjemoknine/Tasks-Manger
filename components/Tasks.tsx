import React from "react";
import Task from "./Task";

const Tasks = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 mt-6 sm:grid-cols-2">
      {Array(6)
        .fill(0, 0)
        .map((item) => (
          <Task />
        ))}
    </div>
  );
};

export default Tasks;
