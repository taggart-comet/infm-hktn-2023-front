import React from "react";

function LivingCompoundItem({ compound, onClick }) {
    return (
        <div className="living-compound-item" onClick={() => onClick(compound)}>
            <div className="compound-image-container">
                <img className="compound-image" src={`https://uznai.mos.ru/_next/image?url=%2Fimages%2Fuploaded%2F${compound.Img}&w=1920&q=75`} alt={`${compound.Name}`} loading="lazy" />
            </div>
            <div className="info">
                <h4 className="title">{compound.Name}</h4>
                <div className="metro">
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="" color="#EF161E">
                        <path
                            d="M0 12V10.48H1.104L4.992 0.703979L8.272 6.41598L11.504 0.703979L15.36 10.48H16.528V12H10.672V10.48H11.552L10.672 8.06398L8.272 12.064L5.808 8.06398L4.96 10.48H5.84V12H0Z"
                            fill="#EF161E"></path>
                    </svg> {compound.Metro}
                </div>
                <div className="score">
                    <i className="fas fa-star score-icon"></i>{compound.Score}
                </div>
            </div>
        </div>
    );
}

export default LivingCompoundItem;
