import {Button, ButtonGroup} from "@mui/material";
import { TextField } from "@mui/material";
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
function TodoList() {

    let [todos, setTodos]=useState([]);

    let [newTodos, setNewTodos]=useState("");

    let handleAddTodo = () => {
         setTodos((todos) => {
            return[...todos, {task: newTodos, id: uuidv4(), isDone: false}]
         });
         setNewTodos("")
        };

    let deleteTodo = (id) => {
         setTodos(todos.filter((todo) => todo.id !== id));
        }

    let markAsDone = (id) =>{
         setTodos((todos) => 
         todos.map((todo) => {
            if (todo.id == id) {
                return{
                    ...todo, isDone: true

                };
            }
            else{
                return  todo
            };
        })
    );
};
    return(
        <div style={{border: "5px solid purple",padding: "20px"}}>
            <h1 style={{color: "purple"}}>kshitij's To-Do List App</h1>
            <hr style={{border: "2px solid purple"}}></hr>
            <br></br>
            <TextField 
            color="secondary"
            value={newTodos}
            label="Add a new task"
            variant="outlined"
            onChange={(event) => setNewTodos(event.target.value)} />
            <br></br>
            <br></br>
            <Button
            style={{backgroundColor: "purple"}}
            variant="contained" 
            onClick={handleAddTodo}>
            Submit</Button>
            <br></br>
            <br></br>
            <hr style={{border: "2px solid purple"}}></hr>
            <h2 style={{color: "blue"}}>Tasks To-Do</h2>
            <ul style={{textAlign: "left"}}>
                {todos.map((todo) => (
                    <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <Button 
                    variant="contained" 
                    style={{backgroundColor: "purple", height: "22px", width: "5px",  border: "2px solid black"}} 
                    onClick={() => deleteTodo(todo.id)}>Delete
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                    variant="contained"
                    style={{backgroundColor: "purple", height: "22px", width: "5px",  border: "2px solid black"}}  
                    onClick={() => markAsDone(todo.id)}>Done
                    </Button>
                    </li>
                ))}
                
            </ul>
        </div>
    );
}
export default TodoList;