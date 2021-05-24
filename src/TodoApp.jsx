import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("low");
  const [id, setId] = useState(0);

  // const [active, setActive] = useState(0);

  const getActive = () => {
    // setActive(
    return todos.filter((todo) => !todo.isComplete).length;
    // );
  };

  let todo = {
    id: 0,
    title: "",
    isComplete: false,
    priority: ["low" | "medium" | "high"],
  };

  const onSubmit = (e) => {
    e.preventDefault();
    todo.id = id;
    todo.title = value;
    todo.priority = priority;
    setTodos([...todos, todo]);
    setValue("");
    setId(id + 1);
  };

  const handleRadioChange = (e) => {
    setPriority(e.target.value);
  };

  const handleComplete = (i) => {
    setTodos(
      todos.map((todo, idx) =>
        idx !== i ? todo : { ...todo, isComplete: !todo.isComplete }
      )
    );
  };

  const handleDelete = (i) => {
    setTodos(
      todos.filter((todo, idx) => {
        if (idx !== i) {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <div className="">
        <TodoForm
          onSubmit={onSubmit}
          handleRadioChange={handleRadioChange}
          value={value}
          setValue={setValue}
        />
        <div>Number of active todos : {getActive()}</div>
        <TodoList
          todos={todos}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
        {todos.length - getActive() && (
          <button
            className="bg-blue-600 p-2"
            onClick={() => {
              setTodos(todos.filter((todo) => !todo.isComplete));
            }}
          >
            clear completed
          </button>
        )}
      </div>
      <ul>
        <li>1. add todo</li>
        <li>2. display todos</li>
        <li>3. cross off todos</li>
        <li>4. show number of active todos</li>
        <li>5. filter all/active/complete todos</li>
        <li>6. delete a todo</li>
        <li>7. delete all completed todos</li>
        <li>7.1. only show if atleast one is complete</li>
        <li>8. button to toggle all on/off</li>
      </ul>
    </>
  );
}

export default TodoApp;
