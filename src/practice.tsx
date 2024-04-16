import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

type TodoTypes = {
    id: string;
    todo: string;
};

type AddTodoType = {
    todo: string;
    editTodoName: string;
};

const Practice:React.FC=()=>{
    const { register, handleSubmit, reset } = useForm<AddTodoType>();
    const [todos, setTodos] = useState<TodoTypes[]>([]);
    const [isEdit, setIsEdit] = useState({ id: "", todo: "" });
  
    const addTodo = async (event: AddTodoType) => {
      const { todo } = event;
      console.log(todo);
      await axios
        .post("http://localhost:3000/add", {
          data: {
            todo,
          },
        })
        .then((response) => {
          console.log(response.data);
          const todo = response.data;
          setTodos((preTodos) => [todo, ...preTodos]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const deleteTodo = async (id: string) => {
      console.log(id);
  
      await axios
        .delete("http://localhost:3000/delete", {
          data: {
            id,
          },
        })
        .then((response) => {
          console.log(response);
          const newTodos = todos.filter((todo) => todo.id !== id);
          setTodos(newTodos);
        })
        .catch((e) => {
          console.log(e.message);
          setTodos(todos);
        });
    };
  
    const editTodo = async ({ editTodoName }: AddTodoType) => {
      await axios
        .put("http://localhost:3000/update", {
          data: {
            id: isEdit.id,
            todo: editTodoName,
          },
        })
        .then((response) => {
          console.log(response.data);
          const newTodos = todos.map((todo) => {
            return todo.id === response.data.id ? response.data : todo;
          });
          setIsEdit({ id: "", todo: "" });
          setTodos(newTodos);
          reset();
        })
        .catch((e) => {
          console.log(e.message);
        });
    };
  
    useEffect(() => {
      axios.get("http://localhost:3000").then((response) => {
        console.log(response.data.todos);
        const { todos } = response.data;
        setTodos(todos);
      });
    }, []);
  
    return (
      <>
      <h1>aaa</h1>
      </>
    );
}

export default Practice;