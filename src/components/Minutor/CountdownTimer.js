import React, { useEffect, useState } from 'react'
import classes from './CountdownTimer.module.css'

const CountdownTimer = ({ countdown, getTime }) => {
    const [remainingTime, setRemainingTime] = useState(countdown)
    const [play, setPlay] = useState(true)

    useEffect(() => {
        console.log(remainingTime);
        let interval = null
        if (remainingTime > 0) {
            interval = setInterval(() => {
                setRemainingTime(remainingTime - 1)
            }, 1000)
        }
        else if (remainingTime === 0 || !play) {
            clearInterval(interval)
            getTime(remainingTime)
            console.log('operation finished');
        }
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [remainingTime, play, countdown])

    const playCountdown = () => {
        if (remainingTime === 0) {
            setRemainingTime(countdown)
            setPlay(true)
        }
        setPlay(!play)
    }

    const stopCountdown = () => {
        setRemainingTime(0)
        setPlay(false)
    }



    return (
        <React.Fragment>
            <div className={classes['countdown-timer']}>
                <span>{remainingTime}</span>
                <span>Seconds</span>
            </div>
            <div className={classes.buttons}>
                <button onClick={playCountdown}>Play</button>
                <button onClick={stopCountdown}>Stop</button>
            </div>
        </React.Fragment>
    )
}

export default CountdownTimer