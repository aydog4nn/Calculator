import { Counter } from "./features/counter/Counter";
import Calculator from "./features/counter/Calculator";
import "./css/index.css";
import { useSelector } from "react-redux";

function App() {
   
    
    const {value} = useSelector((store) => store.calculator);

    return (
        <div>
            <Calculator></Calculator>
        </div>
    );
}

export default App;
