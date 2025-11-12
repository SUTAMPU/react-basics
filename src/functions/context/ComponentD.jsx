import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {

    const user = useContext(UserContext);

    return (
        <div style={{border: "3px solid", padding: "25px"}}>
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default ComponentD