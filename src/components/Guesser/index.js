import React, { useCallback, useEffect, useState } from 'react'
import { Auto } from '../../utils/Calcul'
import CountdownTimer from '../Minutor/CountdownTimer'
import DisplayOperation from './DisplayOperation'
import classes from './Guesser.module.css'

const OPERATIONS = [
    { action: "PENSER", timer: 5 },
    { action: "PLUS", timer: 10 },
    { action: "FOIS", timer: 10 },
    { action: "DIVISE", timer: 10 }
]

const Guesser = () => {
    const randomNum = Math.floor(Math.random() * 50)
    const [currentOperation, setCurrentOperation] = useState(0)
    const [remainingTime, setRemainingTime] = useState(null)
    const [countdown, setCountdown] = useState(OPERATIONS[currentOperation].timer)


    const passToNextOperation = useCallback(() => {
        Auto.number = randomNum
        Auto.calcul(OPERATIONS[currentOperation])
        if (currentOperation <= OPERATIONS.length - 1) {
            setCurrentOperation(currentOperation + 1)
        }
    }, [currentOperation])

    useEffect(() => {
        if (remainingTime === 0 && currentOperation !== OPERATIONS[currentOperation] - 1) {
            // console.log('use effect passtonextfonction');
            // passToNextOperation()
            // setCountdown(10)
        }
        getTime()
        console.log(`Operation finished There and the remaining time is : ${remainingTime}`);
        if (currentOperation < OPERATIONS.length) {
            setCountdown(currentOperation)
        }
    }, [])


    const getTime = (timeReturned) => {
        setCurrentOperation(currentOperation + 1)
        setRemainingTime(timeReturned)
    }


    return (
        <div className={classes.container}>
            <CountdownTimer countdown={countdown} getTime={getTime} />
            <div className={classes['steps-container']}>
                <h1>Welcome to the guess app</h1>

                <DisplayOperation operation={OPERATIONS[currentOperation]} num={randomNum} />
            </div>
        </div>
    )
}

export default Guesser