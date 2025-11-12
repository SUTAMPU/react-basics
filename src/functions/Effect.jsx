import { useState, useEffect } from "react";

function Effect() {
    
    const [count, setCount] = useState(0);
    const [colour, setColour] = useState("green");

    const [width, setWidth] = useState(innerWidth);
    const [height, setHeight] = useState(innerHeight);

    // 1. useEffect(() => {})           // Runs after every re-render
    // 1. useEffect(() => {}, [])       // Runs only on mount
    // 1. useEffect(() => {}, [value])  // Runs on mount + when value changes
    
    // Example 1
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }
    function changeColour() {
        setColour(c => c === "green" ? "red" : "green");
    }


    // Example 2
    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);
        console.log("Event Listener Added")

        return () => {
            window.removeEventListener("resize", handleWindowSize);
            console.log("Event Listener Removed")
        }
    }, []);


    function handleWindowSize() {
        setWidth(innerWidth);
        setHeight(innerHeight);
    }

    return (
    <div>
        <p style={{color: colour}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button> <br />
        <button onClick={changeColour}>Change Colour</button>

        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
    </div>
    );
}

export default Effect;