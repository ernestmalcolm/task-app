import Task from "./Task"
import TaskFilter from "./TaskFilter";

const Tasks = (props) => {

    return (
    <>
    <TaskFilter />
    {/* map through the tasks array and call the Task component for each element. 
    Also pass the value of each element to the Task component */}
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle} />
      ))}
    </>
  );
};

export default Tasks;
