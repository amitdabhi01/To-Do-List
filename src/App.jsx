import { React, useState } from "react";
import InputForm from "./Components/InputForm";
import Header from "./Components/Header";
import ListData from "./Components/ListData";

const App = () => {
  const initialValues = [
    {
      id: 1,
      task: "Learn",
      description: "Learn react in detail",
      completed: true,
    },
  ];

  const [todoData, setTodoData] = useState(initialValues);

  const addTodo = (input) => {
    if (!input.task || !input.description) {
      return alert("Task and Description data is required");
    } else {
      const newData = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        completed: false,
      };
      setTodoData((prevData) => [...prevData, newData]);
    }
  };

    const toggleTaskCompleted = (id) => {
        setTodoData((prevData) =>
            prevData.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    }

  return (
    <>
      <Header />

      <InputForm addTodo={addTodo} />

      <ListData todo={todoData} toggleCompleted={toggleTaskCompleted}/>
    </>
  );
};

export default App;
