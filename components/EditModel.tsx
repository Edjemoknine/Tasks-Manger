import TaskForm from "./TaskForm";
import Model from "./Model";

const EditModel = ({ id }: any) => {
  return (
    <Model>
      <TaskForm type="Update" task={"task"} />
    </Model>
  );
};

export default EditModel;
