
import "./style.css";


const Buttons = ({ tasks, hideDone }) => (
    tasks.lenght > 0 && (
        
    <div className="buttons">
                <button className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"}
                    ukończone
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