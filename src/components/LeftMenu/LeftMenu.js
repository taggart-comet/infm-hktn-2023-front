import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";
import RatingSetupButton from "../RatingSetupButton";
import LivingCompoundItem from "./LivingCompoundItem";
import LivingCompoundInfo from "./LivingCompoundInfo";

const useStyles = makeStyles((theme) => ({
    leftMenu: {
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        top: 142,
        left: 10,
        height: 750,
        width: 475,
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
    const [selectedCompound, setSelectedCompound] = useState(null);

    const handleCompoundClick = (compound) => {
        setSelectedCompound(compound);
    };
    const goBack = () => {
        setSelectedCompound(null);
    };
    return (
        <div className={classes.leftMenu}>
            <div className="left-menu-header">
                {selectedCompound ? (
                        <div className="left-menu-header-title-back" onClick={goBack}>
                            <i className="fas fa-arrow-left" style={{marginRight: 0.5 + 'em'}}></i>Жилые комплексы
                        </div>
                ) : (
                        <div className="left-menu-header-title">Жилые комплексы</div>
                )}
                <RatingSetupButton/>
            </div>
            <div className="left-menu-items">
                {selectedCompound ? (
                    <LivingCompoundInfo
                        key={selectedCompound.Id}
                        compound={selectedCompound}
                    />
                ) : (
                    livingCompounds.map(compound => (
                        <LivingCompoundItem
                            key={compound.Id}
                            compound={compound}
                            onClick={handleCompoundClick}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default LeftMenu;