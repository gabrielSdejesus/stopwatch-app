import React, { useState, useRef, useEffect } from 'react';
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

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() =>{

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliSeconds = String(milliSeconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliSeconds}`;
    }

    return (
        <div className="container-clock">
            <div className="display">
                {formatTime()}
            </div>
            <div className="control-clock">
                <CustomButton onClick={start} variant="contained" color="success">
                    Start
                </CustomButton>

                <CustomButton onClick={stop} variant="contained" color="error">
                    Stop
                </CustomButton>

                <CustomButton onClick={reset} variant="contained" color="secondary">
                    Reset
                </CustomButton>
            </div>
        </div>
    );
}

export default Timer;
