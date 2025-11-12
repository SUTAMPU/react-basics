import { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {

    const user = useContext(UserContext);

    return (
        <div style={{border: "3px solid", padding: "25px"}}>
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    );
}

export default ComponentC