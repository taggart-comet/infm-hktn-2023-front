import './App.css';
import './Extra.css';
import React, { useState, useEffect } from 'react';
import SelectLayerButton from "./components/SelectLayerButton";
import MyMap from "./components/Map/MyMap";
import LeftMenu from "./components/LeftMenu/LeftMenu";

function App() {
    const [needShowLCMap, setNeedShowLCMap] = useState(null);
    const [livingCompounds, setLivingCompounds] = useState([]);

    useEffect(() => {
        // настоящий запрос
        fetch('http://localhost:3000/complexes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        })
            .then(response => response.json())
            .then(data => setLivingCompounds(data))
            .catch(error => console.error('Error fetching living compounds:', error));
    }, []);

    const handleShowLCMap = (flag) => {
        setNeedShowLCMap(flag);
    };

    return (
        <div className="App">
            <div className="avito-header"></div>
            <div className="avito-map-area">
                {needShowLCMap && (
                    <MyMap livingCompounds={livingCompounds} />
                )}
            </div>
            {needShowLCMap && (
                <LeftMenu livingCompounds={livingCompounds} />
            )}
            <div className="avito-map-work-area">
                <div className="avito-map-work-area-tools">
                    <div className="avito-map-work-area-tools-close"></div>
                    <SelectLayerButton showLCMap={handleShowLCMap} />
                    <div className="avito-map-work-area-tools-draw"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
