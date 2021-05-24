const TodoForm = ({ value, setValue, onSubmit, handleRadioChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-center">
          <div>
            <input
              className="hidden"
              type="radio"
              name="priority"
              id="low"
              value="low"
              defaultChecked
              onChange={handleRadioChange}
            />
            <label
              className="border-2  hover:bg-green-600 border-gray-600 bg-green-400 text-white rounded-l-md px-2 py-1"
              htmlFor="low"
            >
              Low
            </label>
          </div>
          <div>
            <input
              className="hidden"
              type="radio"
              name="priority"
              id="medium"
              value="medium"
              onChange={handleRadioChange}
            />
            <label
              className="border-t-2 border-b-2 border-gray-600 bg-blue-500 text-white px-2 py-1 hover:bg-blue-700 "
              htmlFor="medium"
            >
              Medium
            </label>
          </div>

          <div>
            <input
              className="hidden"
              type="radio"
              name="priority"
              id="high"
              value="high"
              onChange={handleRadioChange}
            />
            <label
              className="border-2 border-gray-600  hover:bg-red-600 bg-red-500 text-white rounded-r-md px-2 py-1"
              htmlFor="high"
            >
              High
            </label>
          </div>
        </div>
        <div className="m-4 flex">
          <input
            className="flex-1 rounded-l-md focus:outline-none px-3"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            type="submit"
            className=" px-3 py-1 rounded-r-md bg-yellow-500  hover:bg-yellow-700 focus:outline-none font-semibold text-lg text-white"
          >
            Add todo
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
