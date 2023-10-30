import { useState } from "react";

function Chai() {
   // let counter = 10;

    let [counter, setCounter] = useState(15);

    const addValue = () => {
            counter = counter + 1;
            console.log("incresed counter by 1:", counter);
            if (counter >= 15) {
                setCounter(15);
            } else {
                setCounter(c => Math.max(c + 1, 0));
            }

           // setCounter(counter);
    }

    const subtractValue = () => {
        counter = counter - 1;
        console.log("decreased counter by 1:", counter);
        if (counter <= 0) {
            setCounter(0);
        } else {
            setCounter(c => Math.max(c - 1, 0));
        }

        //counter < 0 ? setCounter(0) : setCounter(counter);
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