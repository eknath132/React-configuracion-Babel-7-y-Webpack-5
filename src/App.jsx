import React, { useState } from "react";

function App() {
    const [name, setName] = useState('')

    return (
        <div className="App"> 
            <h1>
                Hola React
            </h1>
            <div>
                <label htmlFor="name"> Nombre: </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
}

export default App;