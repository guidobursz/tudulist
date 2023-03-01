import { useState } from "react";

const Form = ({ newTodo }) => {
  const [textInput, setTextInput] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput === null || textInput === undefined || textInput === "") {
      return setErrorMsg("El valor ingresado no puede ser vacio");
    } else if (textInput.length < 3) {
      return setErrorMsg(
        "El valor ingresado no puede ser inferior a 3 caracteres."
      );
      // alert("tienes q ingresar algo");
    } else if (textInput.length > 50) {
      return setErrorMsg(
        "El valor ingresado no puede superar los 50 caracteres."
      );
    } else {
      // console.log(textInput);
      // ok to submit: first error to null, then continue
      setErrorMsg(null);
      let newDate = new Date();
      let date = `${newDate.getDate()}/${
        newDate.getMonth() + 1
      }/${newDate.getFullYear()}`;
      let newItem = {
        id: Date.now(),
        fecha: date,
        tarea: textInput,
        estado: "todo",
      };
      //clean form input
      // console.log(e.target[0].value);
      e.target[0].value = "";
      // console.log(newItem);
      // concat to todos array at layoutApp
      newTodo(newItem);
      //clean state input
      setTextInput("");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-b-2 border-gray-400 bg-black/20"
      >
        <div className="p-5">
          <div className="w-full h-full rounded-xl flex ">
            <input
              type="text"
              placeholder="Agregue Tarea"
              onChange={(e) => {
                setTextInput(e.target.value);
              }}
              autoFocus
              className="h-full p-2 flex-1 rounded-tl-xl rounded-bl-xl focus:outline-blue-400"
            />
            <div className="p-1 bg-slate-100 border-l-2 border-zinc-800 rounded-tr-xl rounded-br-xl">
              <button
                type="submit"
                className="h-full focus:outline-none focus:border-none"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
        {errorMsg && (
          <>
            <div className="w-full flex justify-center">
              <div className="w-3/4 rounded-lg bg-red-600/90 mt-1 p-2 mb-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                {errorMsg}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default Form;
