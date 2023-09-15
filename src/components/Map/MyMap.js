import {Map, YMaps} from "react-yandex-maps";
import React from "react";


function MyMap() {
    return (
            <YMaps width="100%" height="100%" query={{apiKey: process.env.YANDEX_API_KEY}}>
                <Map defaultState={{center: [55.75, 37.57], zoom: 13}} width="100%" height="100%"/>
            </YMaps>
    );
}

export default MyMap;