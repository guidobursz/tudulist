//

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

  const cleanAllTodos = () => {
    setTodos([]);
  };

  //component
  return (
    <div className="w-[90%] md:w-[80%]">
      <div className="border-dashed border-2 border-gray-400 rounded-xl">
        <div>
          <Form newTodo={newTodo} />
        </div>
        {todos.length === 0 ? (
          <>
            <div className="flex justify-center m-8">
              There are not ToDos C:
            </div>
          </>
        ) : (
          ""
        )}
        {todos.length >= 1 ? (
          <>
            <div className="p-2">
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
              <div className="border-t-2 border-black mt-6 flex justify-end">
                <button
                  onClick={cleanAllTodos}
                  className="m-2 bg-slate-700 rounded-xl px-4 py-1 text-white italic mt-3"
                >
                  Clean all ToDos
                </button>
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
