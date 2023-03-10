//todo component
const Todo = () => {
  return (
    <>
      <div className="text-orange-500 font-bold uppercase mr-5 ">todo</div>
    </>
  );
};

//done component
const Done = () => {
  return (
    <>
      <div className="text-green-800 font-bold uppercase mr-5 ">listo</div>
    </>
  );
};

//final item
const Item = ({ data, handleDelete, updateStatus }) => {
  const updateClick = () => {
    // console.log("pe");
    updateStatus(data.id);
  };

  const deleteClick = () => {
    // console.log("Clicked item: ", data.id);
    handleDelete(data.id);
  };

  return (
    <div>
      <div className="w-full flex bg-gray-400/90 rounded-xl gap-3 p-2 my-2  text-center items-center">
        {/* data.estado = done => agregar class line-through*/}
        {data.estado === "todo" ? (
          <>
            <div id="divFecha">{data.fecha}</div>
            <div id="divTarea" className="flex-1">
              {data.tarea}
            </div>
          </>
        ) : (
          <>
            <div className="line-through">{data.fecha}</div>
            <div className="flex-1 line-through">{data.tarea}</div>
          </>
        )}
        <div onClick={updateClick} className="cursor-pointer">
          {data.estado === "todo" ? <Todo /> : <Done />}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={deleteClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Item;
