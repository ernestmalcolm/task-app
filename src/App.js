import { useState } from "react";
import React from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export const App = () => {

  const [showAdd, setShowAdd] = useState(false)

  const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: "Laundry",
                day: "22nd Friday",
                reminder: true
            },
            {
                id: 2,
                text: "Barber",
                day: "23rd Saturday",
                reminder: true
            },
            {
                id: 3,
                text: "Dishes",
                day: "24th Sunday",
                reminder: false
            }
        ]
    )

    // Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000);
      const newTask = {id, ...task};
      setTasks([...tasks, newTask]);
    }

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) =>
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task))

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAdd(!showAdd)}
      showAdd={showAdd} />
      {showAdd && <AddTask onAdd={addTask} showAddButton={showAdd} />}
      {tasks.length !==0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      : "No tasks to show"}
    </div>
  )
}

export default App;
