import React from "react";
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    customButton: {
        padding: '4px 16px 4px 12px',
        backgroundColor: '#008aed',
        borderWidth: '1px',
        borderColor: 'rgb(204, 204, 204)',
        outline: "none",
        borderRadius: '6px',
        borderStyle: 'solid',
        boxShadow: '0 0',
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        textTransform: 'none',
        fontSize: 15,
        color: 'white',
        '&:hover': {
            backgroundColor: '#008aed',
            boxShadow: '0 0',
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
                        <i className="fas fa-star"></i> {compound.Score}
                    </div>
                </div>
                <div className="metro">
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="" color="#EF161E">
                        <path
                            d="M0 12V10.48H1.104L4.992 0.703979L8.272 6.41598L11.504 0.703979L15.36 10.48H16.528V12H10.672V10.48H11.552L10.672 8.06398L8.272 12.064L5.808 8.06398L4.96 10.48H5.84V12H0Z"
                            fill="#EF161E"></path>
                    </svg>{compound.Metro}
                </div>
                <div className="image-container">
                    <img src={`https://uznai.mos.ru/_next/image?url=%2Fimages%2Fuploaded%2F${compound.Img}&w=1920&q=75`} alt={`${compound.Name}`} />
                </div>
                <div className="criteria-list">
                    {compound.criteriaScore.map(criteria => (
                        <div key={criteria.criteriaId} className="criteria">
                            <div className="criteria-name">{criteria.criteriaName}</div>
                            <div className="criteria-score">{criteria.criteriaValue} из 10</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="show-ads-button-container">
                <Button variant="contained" className={classes.customButton}>
                    Показать 15 объявлений
                </Button>
            </div>
            <div className="show-ads-button-container-bottom"></div>
        </div>
    );
}

export default LivingCompoundInfo;
