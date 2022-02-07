import './OverNine.css';



function OverNine(props) {
    return (
        <div className={`box  ${(props.displayValue > 9000 ? 'show' : 'hide')}`}></div>
    );
}


export default OverNine;