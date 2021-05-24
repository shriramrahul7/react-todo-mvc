import { Checkbox } from "@material-ui/core";

const TodoList = ({ todos, handleComplete, handleDelete }) => {
  return (
    <div className="mt-3 space-y-1">
      {todos.map((todo, i) => {
        return (
          <div
            className="bg-gray-100 rounded-md flex items-center text-left "
            key={todo.id}
          >
            <input
              className="m-4"
              type="checkbox"
              name="completed"
              id="completed"
              checked={todo.isComplete}
              onClick={() => {
                handleComplete(i);
              }}
            />
            <span
              className={
                "flex-1 px-4 text-lg " + (todo.isComplete ? "line-through" : "")
              }
            >
              {`
            ${todo.title} == ${todo.priority} 
            `}
            </span>
            <button
              className={"p-4 focus:outline-none hover:bg-gray-500"}
              onClick={() => {
                handleDelete(i);
              }}
            >
              {todo.title && "❌"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
