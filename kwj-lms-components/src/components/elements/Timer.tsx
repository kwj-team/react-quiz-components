import { Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface TimerProps {
    isActive: boolean
    seconds: number
    setSeconds: Dispatch<SetStateAction<number>>
}

export const formatSeconds = (secs: number) => {
    const pad = (n: number) => n < 10 ? `0${n}` : n;

    const h = Math.floor(secs / 3600);
    const m = Math.floor(secs / 60) - (h * 60);
    const s = Math.floor(secs - h * 3600 - m * 60);

    return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

export const Timer = ({ isActive, seconds, setSeconds }: TimerProps) => {
    useEffect(() => {

        let interval: ReturnType<typeof setInterval>;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, setSeconds]);

    return (
        <Typography variant="h6" textAlign={"right"} mb={2}>Your time: {formatSeconds(seconds)}</Typography>
    );
};