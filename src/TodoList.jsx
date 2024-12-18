import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{task : "sample-task", id: uuidv4(), isDone:false }]);
    let [newTodo, setNewtodo] = useState("");

    let addnewtask = () => {
        setTodos((prevTodos) =>{
            return [...todos,  { task: newTodo, id :  uuidv4(), isDone: false}];
        });
        setNewtodo("");
    };

    let updateTodoValue = (event) => {
        setNewtodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let markAllDone = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
            };
        })
        ));
  };
    
    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }
        }))
    };

    return (
        <div>
            <input placeholder="add a text" 
            value={newTodo}
            onChange={updateTodoValue}>
            </input>
            <br></br>
            <button className="add-task-btn" onClick={addnewtask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h3> TASKS TO DO </h3>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through"}: {}}>{todo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}> Mark As Done</button>
                        </li>
                    ))
                }
            </ul>

            <br></br>
            <button onClick={markAllDone}> Mark All As Done </button>
        </div>
    );
}