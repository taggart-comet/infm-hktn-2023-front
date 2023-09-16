import './App.css';
import './Extra.css';
import React, { useState, useEffect, createContext } from 'react';
import SelectLayerButton from "./components/SelectLayerButton";
import MyMap from "./components/Map/MyMap";
import LeftMenu from "./components/LeftMenu/LeftMenu";

export const AppContext = createContext();

function App() {
    const [needShowLCMap, setNeedShowLCMap] = useState(null);
    const [livingCompounds, setLivingCompounds] = useState([]);
    const [selectedCompound, setSelectedCompound] = useState(null);

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
    const handleSelectedCompound = (flag) => {
        setSelectedCompound(flag);
    };

    return (
        <AppContext.Provider value={{ livingCompounds, setLivingCompounds }}>
            <div className="App">
                <div className="avito-header"></div>
                <div className="avito-map-area">
                    {needShowLCMap && (
                        <MyMap livingCompounds={livingCompounds} selectCompound={handleSelectedCompound}/>
                    )}
                </div>
                {needShowLCMap && (
                    <LeftMenu livingCompounds={livingCompounds} AppSelectedCompound={selectedCompound}/>
                )}
                <div className="avito-map-work-area">
                    <div className="avito-map-work-area-tools">
                        <div className="avito-map-work-area-tools-close"></div>
                        <SelectLayerButton showLCMap={handleShowLCMap} />
                        <div className="avito-map-work-area-tools-draw"></div>
                    </div>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
