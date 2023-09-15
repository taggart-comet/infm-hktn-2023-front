import React from "react";
import {makeStyles} from "@material-ui/core";

function LivingCompoundItem({ compound }) {
    return (
        <div key={compound.Id} className="living-compound-item">
            <img src={`http://localhost:3000/${compound.Img}`} alt={`${compound.Name}`} />
            <div className="info">
                <h4 className="title">{compound.Name}</h4>
                <div>
                    <i className="fas fa-train-subway" style={{marginRight: 0.3 + 'em', color: "red"}}></i>{compound.Metro}
                </div>
            </div>
            <div className="score">
                <p>Score: {compound.Score}</p>
            </div>
        </div>
    );
}

export default LivingCompoundItem;