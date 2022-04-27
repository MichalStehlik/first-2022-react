import React/*, {useState}*/ from "react";
import "./UpDown.css";

export const UpDown = ({number, setNumber, ...rest}) => {
    //const [value, setValue] = useState(number);
    return (
        <div className="updown">
            <button onClick={e => setNumber(number - 1)} disabled={number == 0 ? true : false}>-</button>
            <span>{number}</span>
            <button onClick={e => setNumber(number + 1)}>+</button>
        </div>
    );
}

export const DownUp = props => {
    return <p>{props.number}</p>
}

export const DownUp2 = props => (
    <p>XXXXXXXX</p>
)

export default UpDown;