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
    customPopover: {
        boxShadow: '0 0',
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
