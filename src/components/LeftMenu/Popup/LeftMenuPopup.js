import React from 'react';

function LeftMenuPopup({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <button style={styles.closeButton} onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    popup: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '500px',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default LeftMenuPopup;
