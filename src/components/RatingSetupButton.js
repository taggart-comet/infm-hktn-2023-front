import React, { useState } from 'react';
import { Button, Popover, List, ListItem, makeStyles } from '@material-ui/core';

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

    const handleClick = (event) => {
        console.log('clicked');
    };

    return (
        <Button variant="contained" className={classes.customButton} onClick={handleClick}>
            <i className="fas fa-user-cog" style={{marginRight: 0.5 + 'em'}}></i>Настройка оценок
        </Button>
    );
}

export default RatingSetupButton;
