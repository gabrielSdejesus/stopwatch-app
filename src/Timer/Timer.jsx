import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
    fontSize: '12px', // Diminui o tamanho da fonte
    padding: '6px 12px', // Diminui o padding
    margin: '5px', // Ajusta a margem
    borderRadius: '8px',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    '&.MuiButton-containedSuccess': {
        backgroundColor: '#4caf50',
        '&:hover': {
            backgroundColor: '#45a049',
        },
    },
    '&.MuiButton-containedError': {
        backgroundColor: '#f44336',
        '&:hover': {
            backgroundColor: '#d32f2f',
        },
    },
    '&.MuiButton-containedSecondary': {
        backgroundColor: '#9c27b0',
        '&:hover': {
            backgroundColor: '#7b1fa2',
        },
    },
}));

function Timer() {
    return (
        <div className="container-clock">
            <div className="timer-title">
                Timer
            </div>
            <div className="control-clock">
                <CustomButton variant="contained" color="success">
                    Start
                </CustomButton>

                <CustomButton variant="contained" color="error">
                    Stop
                </CustomButton>

                <CustomButton variant="contained" color="secondary">
                    Reset
                </CustomButton>
            </div>
        </div>
    );
}

export default Timer;
