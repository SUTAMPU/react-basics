import { useState } from "react";
import Image from "../assets/sun.png";

function ToDoList() {

    const [tasks, setTasks] = useState(["Have breakfast", "Go to gym", "Shower"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function handleAdd() {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
    }

    function handleRemove(index) {
        setTasks(t => t.filter((_, i) => i !== index))
    }

    function handleMoveUp(index) {
        if(index > 0) {
            
            setTasks( t => {
                const updatedTasks = [...t];
                [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
                return updatedTasks;
            });
        };
    }

    function handleMoveDown(index) {
        if(index < tasks.length - 1) {
            
            setTasks( t => {
                const updatedTasks = [...t];
                [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
                return updatedTasks;
            });
        };
    }

    return (
        <div className="to-do">
            <div className="to-do-header">
                <img src={Image} alt="sun"></img>
                <div className="to-do-heading">
                    <p>{tasks.length} Tasks</p>
                    <h2>To-Do List</h2>
                </div>
            </div>

            <div className="to-do-body">

                <h2>Personal Tasks</h2>

                <ol>
                    {tasks.map((task, index) => 
                    
                    <li key={index}>
                        <span className="to-do-text">
                        {task}
                        </span>
                        <button className="to-do-remove" onClick={() => {handleRemove(index)}}>Remove</button>
                        <button className="to-do-move" onClick={() => {handleMoveUp(index)}}>▲</button>
                        <button className="to-do-move" onClick={() => {handleMoveDown(index)}}>▼</button>
                    </li>
                    )}
                </ol>

                <div className="to-do-body-add">
                    <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                    <button className="to-do-add" onClick={handleAdd}>Add</button>
                </div>

            </div>
        </div>
        
    );
}

export default ToDoList