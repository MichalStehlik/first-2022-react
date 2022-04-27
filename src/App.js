import {useState} from "react";
import './App.css';
//import UpDown from "./components/UpDown";
import {UpDown/*, DownUp*/} from "./components/UpDown";

function App() {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(1);
  return (
    <>
      <UpDown number={first} setNumber={setFirst} color="red"/>
      <UpDown number={second} setNumber={setSecond} />
      <p>{first + second}</p>
    </>
  );
}

export default App;
