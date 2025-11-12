import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const increment = () => {
        setCount(c => c + 1);
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-btn" onClick={decrement} >Decrement</button>
            <button className="counter-btn" onClick={reset}>Reset</button>
            <button className="counter-btn" onClick={increment}>Increment</button>
        </div>
    );

};

export default Counter