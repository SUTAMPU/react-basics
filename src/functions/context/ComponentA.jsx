import { useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Stamp");

    return (
        <div style={{border: "3px solid", padding: "25px"}}>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA