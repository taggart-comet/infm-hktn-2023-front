import React, { useState } from 'react';
import { Button, Popover, List, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    customButton: {
        padding: '3px 10px 3px 10px',
        backgroundColor: 'white',
        border: '0px solid #ccc',
        borderRadius: 7,
        boxShadow: '0 2px 3px 2px rgba(0, 0, 0, .3)',
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        textTransform: 'none',
        fontSize: 13,
        color: 'black',
        '&:hover': {
            backgroundColor: '#f0f0f0',
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
