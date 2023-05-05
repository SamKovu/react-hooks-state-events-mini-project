import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState} from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [filter, setFilter] = useState("All");

function myFilter(pass){
  setFilter(pass);
  console.log(filter);
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} myFilter={myFilter}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} filter={filter}/>
    </div>
  );
}

export default App;
