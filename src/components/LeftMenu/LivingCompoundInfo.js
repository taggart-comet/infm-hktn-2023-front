import React from "react";
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    customButton: {
        padding: '7px 15px 7px 15px',
        backgroundColor: '#00aaff',
        border: '0px solid #ccc',
        borderRadius: 5,
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        textTransform: 'none',
        fontSize: 15,
        color: 'white',
        '&:hover': {
            backgroundColor: '#008aed',
        },
    },
}))

function LivingCompoundInfo({ compound }) {
    const classes = useStyles();
    return (
        <div className="living-compound-info">
            <div>
                <div className="info">
                    <h4 className="title">{compound.Name}</h4>
                    <div className="score">
                        <i className="fas fa-star" style={{marginRight: 0.3 + 'em', color: "gold"}}></i>{compound.Score}
                    </div>
                </div>
                <div className="metro">
                    <i className="fas fa-train-subway" style={{marginRight: 0.3 + 'em', color: "red"}}></i>{compound.Metro}
                </div>
                <div className="image-list">
                    <img src={`https://uznai.mos.ru/_next/image?url=%2Fimages%2Fuploaded%2F${compound.Img}&w=1920&q=75`} alt={`${compound.Name}`} />
                    <img src={`https://uznai.mos.ru/_next/image?url=%2Fimages%2Fuploaded%2F${compound.Img}&w=1920&q=75`} alt={`${compound.Name}`} />
                    <img src={`https://uznai.mos.ru/_next/image?url=%2Fimages%2Fuploaded%2F${compound.Img}&w=1920&q=75`} alt={`${compound.Name}`} />
                    <img src={`https://uznai.mos.ru/_next/image?url=%2Fimages%2Fuploaded%2F${compound.Img}&w=1920&q=75`} alt={`${compound.Name}`} />
                </div>
                <div className="criteria-list">
                    {compound.criteriaScore.map(criteria => (
                        <div key={criteria.criteriaId} className="criteria">
                            <div className="criteria-name">{criteria.criteriaName}</div>
                            <div>{criteria.criteriaValue} из 10</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="show-ads-button-container">
                <Button variant="contained" className={classes.customButton}>
                    Показать 15 объявлений
                </Button>
            </div>
        </div>
    );
}

export default LivingCompoundInfo;