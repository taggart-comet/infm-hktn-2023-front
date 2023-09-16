import React, { useState } from 'react';
import { Button, Popover, List, ListItem, makeStyles } from '@material-ui/core';
import LeftMenuPopup from "./LeftMenu/Popup/LeftMenuPopup";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import CriteriaList from "./LeftMenu/Popup/CriteriaList";
import { HTML5Backend } from 'react-dnd-html5-backend';

const useStyles = makeStyles((theme) => ({
    customButton: {
        padding: '4px 16px 4px 12px',
        backgroundColor: 'white',
        borderWidth: '1px',
        borderColor: 'rgb(204, 204, 204)',
        outline: "none",
        borderRadius: '6px',
        borderStyle: 'solid',
        boxShadow: '0 0',
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        textTransform: 'none',
        fontSize: 14,
        color: 'black',
        '&:hover': {
            backgroundColor: '#f0f0f0',
            boxShadow: '0 0',
        },
    },
}))

function RatingSetupButton() {
    const classes = useStyles();
    const [isPopupOpen, setIsPopupOpen] = useState(null);

    return (
        <div>
            <Button variant="contained" className={classes.customButton} onClick={() => setIsPopupOpen(true)}>
                <i className="fas fa-user-cog" style={{marginRight: 0.5 + 'em'}}></i>Настройка оценок
            </Button>
            <LeftMenuPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} >
                <div>
                    <div>
                        <div className="left-menu-popup-header">Настройка оценок</div>
                        <div className="left-menu-popup-hint">Переместите критерии, в зависимости от ваших предпочтений, <br/>чем выше критерий тем больше он влияет на оценку</div>
                    </div>
                    <DndProvider backend={HTML5Backend}>
                        <CriteriaList />
                    </DndProvider>
                </div>
            </LeftMenuPopup>
        </div>
    );
}

export default RatingSetupButton;
