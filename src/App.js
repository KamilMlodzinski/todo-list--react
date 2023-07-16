
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
    { id: 1, content: "przejsc na reacta", done: false },
    { id: 2, content: "zjesc obiad", done: true },
];

const hideDoneTasks = false; 

function App() {
  return (
    <Container>
    <Header title="Lista zadań"/>
    <Section title="dodaj nowe zadanie" body={< Form/>} />
    <Section 
    title="Lista zadań"
    body={< Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
    extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
    />
</Container>
  )
};

export default App;
