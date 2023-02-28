import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

let example = [
  {
    id: 123,
    fecha: "05/1/2023",
    tarea: "Ejemplo",
    estado: "done",
  },
];

const useTodo = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["todoData"]);

  const [todos, setTodos] = useState(example);

  useEffect(() => {
    //json todos:
    let json = JSON.stringify(todos);
    setCookie("todoData", json, { path: "/" });
  }, [todos]);

  useEffect(() => {
    let savedTodos = cookies.todoData;
    console.log(savedTodos);
    setTodos(savedTodos);
    // let todosObj = JSON.parse(savedTodos);
    // console.log(todosObj);
  }, []);

  return {
    todos,
    setTodos,
  };
};

export default useTodo;
