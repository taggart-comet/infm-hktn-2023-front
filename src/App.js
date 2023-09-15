import './App.css';
import React, { useState, useEffect } from 'react';
import SelectLayerButton from "./components/SelectLayerButton";
import MyMap from "./components/Map/MyMap";
import LeftMenu from "./components/LeftMenu/LeftMenu";

function App() {
    const [needShowLCMap, setNeedShowLCMap] = useState(null);
    const [livingCompounds, setLivingCompounds] = useState([]);

    useEffect(() => {
        // мок
        const mockResponse = [
            {
                "Id": 1,
                "Name": "Врубеля, 4",
                "Latitude": 37.502022,
                "Longitude": 55.806213,
                "Metro": "Красная поляна",
                "Address": "улица Врубеля, к4 стр",
                "Img": "jks/1967590/фото3.jpg",
                "Score": "9.9",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 50
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 60
                    }
                ]
            },
            {
                "Id": 4,
                "Name": "Огни",
                "Latitude": 37.474259,
                "Longitude": 55.698193,
                "Address": "улица Лобачевского",
                "Metro": "Ленинская",
                "Img": "jks/49134/фото5.png",
                "Score": "9.8",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 6,
                "Name": "Wellbe (Вэллби)",
                "Latitude": 37.149932,
                "Longitude": 55.990194,
                "Address": "улица Александровка",
                "Metro": "Путинский вокзал",
                "Img": "jks/4115687/wellbe_2.jpg",
                "Score": "9.8",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 7,
                "Name": "Титул на Серебрянической",
                "Latitude": 37.646757,
                "Longitude": 55.749851,
                "Address": "Серебряническая набережная",
                "Metro": "Полянка",
                "Img": "jks/300653/фото1.jpg",
                "Score": "9.8",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 8,
                "Name": "Шереметьевский",
                "Latitude": 37.599522,
                "Longitude": 55.801231,
                "Address": "Складочная улица",
                "Metro": "Полянка",
                "Img": "jks/49361/фото3.jpg",
                "Score": "9.7",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 9,
                "Name": "MYPRIORITY Basmanny (Май Приорити Басманни)",
                "Latitude": 37.689568,
                "Longitude": 55.772294,
                "Address": "Малая Почтовая улица",
                "Metro": "Пшеничная",
                "Img": "jks/3401527/mypriority_basmanny_img_001.jpg",
                "Score": "9.5",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 10,
                "Name": "Переделкино Ближнее Город-парк",
                "Latitude": 37.321025,
                "Longitude": 55.638922,
                "Address": "улица Бориса Пастернака",
                "Metro": "Брусника",
                "Img": "jks/1287/gorodpark-peredelkino-blizhnee-moskva-jk-587793814-10.jpg",
                "Score": "9.5",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 11,
                "Name": "Armani/Casa Moscow Residences (Армани/Каса Москоу Резиденсес)",
                "Latitude": 37.619319,
                "Longitude": 55.739986,
                "Address": "Старомонетный переулок, 19/11с1",
                "Metro": "Самолетная",
                "Img": "jks/3419909/armani_casa_img_001.jpg",
                "Score": "9.5",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 12,
                "Name": "Парк легенд",
                "Latitude": 37.642515,
                "Longitude": 55.701034,
                "Address": "Автозаводская, 23 ст120 к5",
                "Metro": "Пшеничная",
                "Img": "jks/8787/фото2.jpg",
                "Score": "9.5",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 13,
                "Name": "Kuznetsky Most 12 by Lalique (Кузнецкий Мост 12)",
                "Latitude": 37.621396,
                "Longitude": 55.761146,
                "Address": "улица Кузнецкий Мост, 12",
                "Metro": "Пшеничная",
                "Img": "jks/49514/kuznetsky_most_12_by_lalique_moskva_jk_1425339033_10.jpg",
                "Score": "9.5",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 14,
                "Name": "Молодогвардейская 36",
                "Latitude": 37.418813,
                "Longitude": 55.736719,
                "Address": "Молодогвардейская улица",
                "Metro": "Пшеничная",
                "Img": "jks/50029/ФОТО1.png",
                "Score": "9.5",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            },
            {
                "Id": 15,
                "Name": "City Park (Сити Парк)",
                "Latitude": 37.543686,
                "Longitude": 55.754642,
                "Address": "Мантулинская улица, вл7",
                "Metro": "Пшеничная",
                "Img": "jks/19492/фото13.png",
                "Score": "9.5",
                "criteriaScore": [
                    {
                        "criteriaId": 1,
                        "criteriaName": "мфц",
                        "criteriaValue": 0
                    },
                    {
                        "criteriaId": 2,
                        "criteriaName": "метро",
                        "criteriaValue": 0
                    }
                ]
            }
        ];

        setLivingCompounds(mockResponse);

        // настоящий запрос
        // fetch('http://localhost:3000/getLivingCompounds')
        //     .then(response => response.json())
        //     .then(data => setLivingCompounds(data))
        //     .catch(error => console.error('Error fetching living compounds:', error));
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
