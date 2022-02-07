
import './Step.css';






function Step(props) {

    function onFieldChange(e) {
        const stepName = e.target.name;
        const thisStep = e.target.value;
        props.changeStep(stepName, thisStep);
    }

    return (
        <input type="number" name="stepValue" min={500} max={10000} step={50} defaultValue={500} className="step-class" onChange={onFieldChange}></input>
    );
}

export default Step;
