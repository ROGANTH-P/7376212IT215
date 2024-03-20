// src/App.js
import React, { useState } from 'react';

function App() {
    const [numbers, setNumbers] = useState('');
    const [average, setAverage] = useState(null);

    const calculateAverage = () => {
        const numArray = numbers.split(',').map(Number);
        const sum = numArray.reduce((acc, curr) => acc + curr, 0);
        const avg = sum / numArray.length;
        setAverage(avg.toFixed(2));
    };

    return (
        <div className="App">
            <h1>Average Calculator</h1>
            <input
                type="text"
                placeholder="Enter comma-separated numbers"
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
            />
            <button onClick={calculateAverage}>Calculate Average</button>
            {average && <p>Average: {average}</p>}
        </div>
    );
}

export default App;
