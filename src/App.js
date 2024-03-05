import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [hideDone, setHideDone] = useState(false);
  
  const [tasks, setTasks,] = useState(
      JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]
  );


  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const  addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.lenght - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="dodaj nowe zadanie" body={< Form addNewTask={addNewTask} />} />
      <Section
        title="Lista zadań"
        body={
          < Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  )
};

export default App;
