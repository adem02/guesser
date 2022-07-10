import React, { useEffect, useState } from 'react'
import classes from './CountdownTimer.module.css'

const CountdownTimer = ({ countdown, getTime }) => {
    const [remainingTime, setRemainingTime] = useState(5)
    const [play, setPlay] = useState(true)

    useEffect(() => {
        let interval = null
        if (remainingTime > 0) {
            interval = setInterval(() => {
                setRemainingTime(remainingTime - 1)
            }, 1000)
        }

        if (remainingTime === 0) clearInterval(interval)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [remainingTime, play])

    useEffect(() => {
        console.log('CountdownTimer rendered !!');
    }, [])




    return (
        <React.Fragment>
            <div className={classes['countdown-timer']}>
                <span>{remainingTime}</span>
                <span>Seconds</span>
            </div>
        </React.Fragment>
    )
}

export default CountdownTimer