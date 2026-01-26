import { useState } from "react";
import Greeting from "./Greeting";

function Vidu1(){

    const [xx, setxx] = useState(true);

    function abc(){
        setxx(!xx);
    }

    return (
        <div>
            <h1>abc</h1>
            <Greeting xx = {xx} />
            <button onClick={abc}>Click</button>
        </div>
    );
}

export default Vidu1;