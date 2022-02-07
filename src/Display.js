import './Display.css';

function Display(props) {
    return (
        <span className={`value  ${(props.displayValue <= 5 ? 'purple' : 'green')}`}>
            {props.displayValue}
        </span>
    );
}

export default Display;