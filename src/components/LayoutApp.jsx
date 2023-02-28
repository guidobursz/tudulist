//

import { useState } from "react";
import useTodo from "../hooks/useTodo";
import Form from "./Form";
import Item from "./Item";

//
const LayoutApp = () => {
  const { todos, setTodos } = useTodo();

  //remove task
  const handleDelete = (removedId) => {
    // console.log(removedId);
    let removeOneTask = todos.filter((obj) => obj.id !== removedId);
    setTodos(removeOneTask);
  };

  const newTodo = (newItem) => {
    //console.log(newItem);
    setTodos(todos.concat(newItem));
  };

  const updateStatus = (id) => {
    let element = todos.find((el) => el.id === id);
    let elIndex = todos.indexOf(element);
    // console.log("test: ", element);
    // console.log(elIndex);
    let newItem = { ...element };
    if (newItem.estado === "todo") {
      newItem.estado = "done";
    } else {
      newItem.estado = "todo";
    }
    //copy todos state to replace it
    let arrayReplacement = [...todos];
    arrayReplacement[elIndex] = newItem;
    // console.log(arrayReplacement);
    // console.log(todos);
    setTodos(arrayReplacement);
    // console.log("here logic for update status in state array");
  };

  //component
  return (
    <div className="w-9/12 shadow-lg shadow-indigo-500/70">
      <div className="border-dashed border-2 border-orange-500">
        <div>
          <Form newTodo={newTodo} />
        </div>
        {todos.length === 0 ? (
          <>
            <div className="flex justify-center m-8">
              No se encontraron ToDos por hacer...
            </div>
          </>
        ) : (
          ""
        )}
        {todos.length >= 1 ? (
          <>
            <div className="p-3">
              <div className="w-full flex justify-center rounded-full p-2 gap-5 text-center uppercase bg-gray-800 font-bold text-white">
                <div>Fecha</div>
                <div className="flex-1">Tarea</div>
                <div>Status</div>
                <div>Borrar</div>
              </div>
              <div>
                {todos.map((todo) => (
                  <Item
                    key={todo.id}
                    data={todo}
                    handleDelete={handleDelete}
                    updateStatus={updateStatus}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LayoutApp;
