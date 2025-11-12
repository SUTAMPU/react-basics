import React, {useState} from "react"

function ColourPicker() {

    const [colour, setColour] = useState("#ffffff")

    function handleColourChange(event) {
        setColour(event.target.value);
    }

    return (
        <div className="colour-container">
            <h1>Colour Picker</h1>
            <div className="colour-picker" style={{backgroundColor: colour}}>
                <p>Selected Colour: {colour}</p>
            </div>

            <p>Select a Colour</p>
            <input type="color" value={colour} onChange={handleColourChange} />
        </div>
    );
}

export default ColourPicker