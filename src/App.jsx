import TodoApp from "./TodoApp";

const App = () => {
  return (
    <div className="flex flex-col space-y-10  items-center font-mono bg-yellow-300 h-screen">
      <h1 className="text-5xl font-bold ">TO-DO LIST </h1>
      <TodoApp />
    </div>
  );
};

export default App;
