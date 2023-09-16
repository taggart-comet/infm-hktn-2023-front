import {Map, YMaps, Placemark, Clusterer} from "react-yandex-maps";
import React from "react";


function MyMap({ livingCompounds }) {
    return (
            <YMaps width="100%" height="100%" query={{apikey: '012caa6a-dbbf-4493-953f-263803e29812'}}>
                <Map defaultState={{center: [55.75, 37.57], zoom: 13}} width="100%" height="100%">
                    <Clusterer
                        options={{
                            preset: "islands#invertedBlueClusterIcons",
                            groupByCoordinates: false,
                            clusterDisableClickZoom: true,
                        }}
                    >
                    {livingCompounds.map((cpx, index) => (
                        <Placemark
                            key={index}
                            geometry={[cpx.Longitude, cpx.Latitude]}
                            properties={{
                                hintContent: cpx.Name,
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(createSvg(cpx.Score)),
                                iconImageSize: [50, 50],
                                iconImageOffset: [-25, -25],
                            }}
                        />
                    ))}
                    </Clusterer>
                </Map>
            </YMaps>
    );
}

function createSvg(score) {
    const color = calculateColor(score);
    return `
    <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" fill="${color}" />
      <text x="25" y="30" font-size="16" font-family="Arial" font-weight="bold" fill="white" text-anchor="middle">${score}</text>
    </svg>
  `;
}

function calculateColor(score) {
    let red, green;

    if (score >= 0 && score <= 5) {
        // Диапазон от красного к оранжевому
        red = 255;
        green = Math.floor(50 + (score - 1) * (100 - 50) / (5 - 1));
    } else if (score > 5 && score <= 7.5) {
        // Диапазон от оранжевого к желтому
        red = Math.floor(255 - (score - 5) * (100) / (7.5 - 5));
        green = 200;
    } else if (score > 7.5 && score <= 10) {
        // Диапазон от желтого к зеленому
        red = 0;
        green = Math.floor(200 + (score - 7.5) * (255 - 200) / (10 - 7.5));
    }

    return `rgb(${red}, ${green}, 0)`;
}

export default MyMap;
