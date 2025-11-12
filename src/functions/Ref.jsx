import { useState, useEffect, useRef, use } from "react";

function Ref() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Rendered")
        console.log(inputRef)
    });

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.placeholder = "yellow";
    }

    return (
        <div>

            <button onClick={handleClick}>Click me!</button><br />
            <input ref={inputRef}/>

        </div>
    );
}

export default Ref;