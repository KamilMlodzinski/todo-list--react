
import "./style.css";


const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons">
    {tasks.lenght > 0 && (
     <>   
                <button onClick={toggleHideDone} className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"}
                    ukończone
                </button>
                <button 
                onClick = {setAllDone}
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}>
                    Ukończ Wszystkie
                </button>
                </>
    )}
            </div>
    );

export default Buttons;