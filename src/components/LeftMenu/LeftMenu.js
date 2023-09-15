import React from "react";
import {makeStyles} from "@material-ui/core";
import RatingSetupButton from "../RatingSetupButton";
import LivingCompoundItem from "./LivingCompoundItem";

const useStyles = makeStyles((theme) => ({
    leftMenu: {
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        top: 142,
        left: 10,
        height: 750,
        width: 450,
        position: "absolute",
        backgroundColor: 'white',
        border: '0px solid #ccc',
        borderRadius: 7,
        boxShadow: '0 2px 3px 2px rgba(0, 0, 0, .3)',
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    },
}))

function LeftMenu({ livingCompounds }) {
    const classes = useStyles();
    return (
        <div className={classes.leftMenu}>
            <div className="left-menu-header">
                <div className="left-menu-header-title">Жилые комплексы</div>
                <RatingSetupButton/>
            </div>
            <div className="left-menu-items">
                {livingCompounds.map(compound => (

                    <LivingCompoundItem compound={compound}/>
                ))}
            </div>
        </div>
    );
}

export default LeftMenu;