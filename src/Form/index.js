
import "./style.css";
import { useState } from "react";


const Form = ({addNewTask}) => {

const [newTaskContent, setNewTaskContent] = useState("");

const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
};


    return (
    <form className="form" onSubmit={onFormSubmit}>
    <input 
    value={setNewTaskContent} 
    className="form__input" 
    name="input" 
    placeholder="Co jest do zrobienia?"
    onChange = {({target}) => setNewTaskContent(target.value)}
    autofocus/>
    <button className="form__button">Dodaj zadanie</button>
</form>
)
;}
    
;


export default Form;

