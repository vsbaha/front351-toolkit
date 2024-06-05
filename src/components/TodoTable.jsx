import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DeleteIcon } from "./UI/icons";
import { removeTodo, fetchTodos, deleteTodo } from "../store/todosSlice";

const TodoTable = () => {
  const { items, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleDeleteClick = (id) => {
    console.log(id);
    // dispatch(removeTodo(id))
    dispatch(deleteTodo(id))
  };

  const handleCheckClick = (id) => {
    console.log(id);
  };

  if (loading) {
    return <div>Загружаю...</div>;
  }

  if (error) {
    return <div>Ошибка: {error} </div>
  }

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-min gap-2 w-full max-w-lg text-sm text-left text-gray-table-auto border-collapse border-spacing-2 @container">
        {items.map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-200 bg-white rounded-md flex items-center gap-2 p-2 [&>*]:flex [&>*]:items-center"
          >
            <div>
              <input
                type="checkbox"
                className="default:ring-2 checked:bg-green invisible @sm:visible"
                onClick={() => handleCheckClick(item.id)}
              />
            </div>
            <div className="flex-grow flex-shrink-0">{item.todo}</div>
            <div>
              <button
                className="text-red-500 px-2 rounded-sm text-base"
                onClick={() => handleDeleteClick(item.id)}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoTable;
