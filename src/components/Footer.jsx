import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { colorchanged, statuschanged } from "../redux/filters/actions";

function numberOfTodos(todoNum) {
  switch (todoNum) {
    case 0:
      return "No task";
    case 1:
      return "1 task";
    default:
      return `${todoNum} tasks`;
  }
}

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const todosRemaining = todos.filter((todo) => !todo.completed).length;

  const { status, colors } = filters;

  const handleStatusChange = (status) => {
    dispatch(statuschanged(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorchanged(color, "removed"));
    } else {
      dispatch(colorchanged(color, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "all" && "font-bold"}`}
          onClick={() => handleStatusChange("all")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "incomplete" && "font-bold"}`}
          onClick={() => handleStatusChange("incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "complete" && "font-bold"}`}
          onClick={() => handleStatusChange("complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
}
