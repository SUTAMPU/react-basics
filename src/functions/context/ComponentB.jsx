import ComponentC from "./ComponentC";

function ComponentB() {
    return (
        <div style={{border: "3px solid", padding: "25px"}}>
            <ComponentC />
        </div>
    );
}

export default ComponentB