import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import fetchTodos from "../redux/todos/thunk/fetchTodos";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filterByStatus = (todo) => {
    switch (status) {
      case "complete":
        return todo.completed;
      case "incomplete":
        return !todo.completed;
      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </div>
  );
}
