import data from './../data.json';
import { useState } from 'react';



export default function Openings() {
    const [index, setIndex] = useState(0);
    const openings = data.openings;
    // let index = 0;

    function handleClick() {
        if (index < openings.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    return(
        <div>
            <h2>Chess Openings I Know How to Play</h2>
            <h4>{openings[index]["name"]}</h4>
            <ol>
                <li>First Move: {openings[index]["first-move"]}</li>
                <li>Color: {openings[index]["color"]}</li>
                <li>Difficulty: {openings[index]["difficulty"]}</li>
            </ol>
            
            <button onClick={handleClick}>Next</button>
        </div>
    );
}