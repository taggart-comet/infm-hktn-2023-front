import React, { useState } from 'react';
import { Button, Popover, List, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    customButton: {
        padding: '5px 12px 5px 12px',
        backgroundColor: 'white',
        border: '0px solid #ccc',
        borderRadius: 7,
        boxShadow: '0 2px 3px 2px rgba(0, 0, 0, .3)',
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        textTransform: 'none',
        fontSize: 14,
        color: 'black',
        '&:hover': {
            backgroundColor: '#f0f0f0',
        },
    },
}))

function SelectLayerButton({ showLCMap }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [buttonLabel, setButtonLabel] = useState('Объявления');

    const options = ['Объявления', 'Жилые комплексы', 'Районы'];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOptionClick = (option) => {
        setButtonLabel(option);
        showLCMap(option === 'Жилые комплексы')
        handleClose();
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button variant="contained" className={classes.customButton} onClick={handleClick}>
                <i className="fas fa-layer-group" style={{marginRight: 0.5 + 'em'}}></i>  {buttonLabel}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List>
                    {options.map((option) => (
                        <ListItem button key={option} onClick={() => handleOptionClick(option)}>
                            {option}
                        </ListItem>
                    ))}
                </List>
            </Popover>
        </div>
    );
}

export default SelectLayerButton;
