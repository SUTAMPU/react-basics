import { useState } from "react";

function Array() {

    const [foods, setFoods] = useState(["Eggs", "Milk", "Banana"])

    function handleAdd() {

        const newFood = document.getElementById("input").value;
        document.getElementById("input").value = "";
        
        setFoods(f => [...f, newFood]);
    }

    function handleRemove(index) {
        setFoods(foods.filter((_, i) => i != index));
    }

    return (
        <div>
            <h2>List of Food</h2>

            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemove(index)}>{food}</li>
                )}
            </ul>

            <input type="text" id="input" />
            <button onClick={handleAdd}>Add Food</button>
        </div>
    );
}

export default Array