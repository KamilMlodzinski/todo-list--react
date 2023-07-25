
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";


const tasks = [
    { id: 1, content: "przejsc na reacta", done: false },
    { id: 2, content: "zjesc obiad", done: true },
];

 

function App() {
const [hideDone, setHideDone] = useState(false);

const toggleHideDone = () => {
  setHideDone(hideDone =>!hideDone);
};

  return (
    <Container>
    <Header title="Lista zadań"/>
    <Section title="dodaj nowe zadanie" body={< Form/>} />
    <Section 
    title="Lista zadań"
    body={< Tasks tasks={tasks} hideDone={hideDone} />}
    extraHeaderContent={
    <Buttons 
    tasks={tasks} 
    hideDone={hideDone} 
    toggleHideDone={toggleHideDone} />}
    />
</Container>
  )
};

export default App;
