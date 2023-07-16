
import "./style.css";


const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.lenght > 0 && (
        
    <div className="buttons">
                <button className="buttons__button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"}
                    Ukryj ukończone
                </button>
                <button 
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}>
                    Ukończ Wszystkie
                </button>
            </div>
)
    );

export default Buttons;