import React from "react";

function LivingCompoundItem({ compound, onClick }) {
    return (
        <div className="living-compound-item" onClick={() => onClick(compound)}>
            <img src={`https://uznai.mos.ru/_next/image?url=%2Fimages%2Fuploaded%2F${compound.Img}&w=1920&q=75`} alt={`${compound.Name}`} loading="lazy" />
            <div className="info">
                <h4 className="title">{compound.Name}</h4>
                <div className="metro">
                    <i className="fas fa-train-subway" style={{marginRight: 0.3 + 'em', color: "red"}}></i>{compound.Metro}
                </div>
            </div>
            <div className="score">
                {compound.Score}<i className="fas fa-star" style={{marginLeft: 0.3 + 'em', color: "gold"}}></i>
            </div>
        </div>
    );
}

export default LivingCompoundItem;