import { useState } from "react";

function Chai() {
   // let counter = 10;

    let [counter, setCounter] = useState(15);

    const addValue = () => {
            // limit counter max value to 15
             if (counter >= 15) {
                setCounter(15);
            } else {
                setCounter(c => Math.max(c + 1, 0));
            }
    }

    const subtractValue = () => {
        // limit counter min value to 0
        if (counter <= 0) {
            setCounter(0);
        } else {
            setCounter(c => Math.max(c - 1, 0));
        }
}


    return (
    <>
    <h1> Chai aur Code in Vite</h1>
    <h2> Counter value : {counter} </h2>
    
    <button onClick={addValue}> increse counter </button>
    <button onClick={subtractValue}> decrease counter</button> 
    </> 
    )
}

export default Chai;