import { useState } from "react";

function ObjectArray() {

    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleAdd() {
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c => [...c, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleYear(event) {
        setYear(event.target.value)
    }

    function handleMake(event) {
        setMake(event.target.value)
    }

    function handleModel(event) {
        setModel(event.target.value)
    }

    return (
        <div>
            <h2>List of Car Objects</h2>

            <ul>
                {cars.map((car, index) => <li key={index}>{car.year} {car.make} {car.model}</li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYear}/><br />
            <input type="text" value={carMake} onChange={handleMake} placeholder="Enter car make"/><br />
            <input type="text" value={carModel} onChange={handleModel} placeholder="Enter car model"/><br />
            <button onClick={handleAdd}>Add Car</button>
        </div>
    );
}

export default ObjectArray