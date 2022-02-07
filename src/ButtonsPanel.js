
import './ButtonsPanel.css';


function ButtonsPanel(props) {
    return(
        <div className="buttons-panel">
            <button onClick={() => {props.buttonMethod('add');}} className='button'>Add</button>
            <button onClick={() => {props.buttonMethod('reinit');}} className='button'>ReInit</button>
            <button onClick={() => {props.buttonMethod('reset');}} className='button'>Reset</button>
        </div>

    );
}

export default ButtonsPanel;