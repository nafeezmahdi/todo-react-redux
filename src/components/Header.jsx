import { useState } from "react";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { allcompleted, clearcompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

export default function Header() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleNewTodo = (evnt) => {
    setNewTodo(evnt.target.value);
  };

  const submitHandler = (evnt) => {
    evnt.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  const handleCompleteAll = () => {
    dispatch(allcompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearcompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={newTodo}
          onChange={handleNewTodo}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
          style={{ backgroundImage: `url(${plusImage})` }}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleCompleteAll}
        >
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
