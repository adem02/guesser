import React, { useState } from 'react'
import { OPERATIONS } from '../../utils/operations'
import OperationsControllerButtons from '../ControllerButtons/OperationsControllerButtons'
import DisplayOperation from '../UI/DisplayOperation'
import DisplayResult from '../UI/DisplayResult'
import classes from './Guesser.module.css'
import { Auto } from '../../utils/calcul'

const Guesser = () => {
    const [currentOperation, setCurrentOperation] = useState(0);
    const [displayResult, setDisplayResult] = useState(false);

    const passToNextOpHanlder = () => {
        if (currentOperation < OPERATIONS.length - 1) {
            Auto.calcul(OPERATIONS[currentOperation].action)
            setCurrentOperation(currentOperation + 1)
        }
    }

    const displayResutlHandler = () => setDisplayResult(true)

    const resetHandler = () => {
        if (currentOperation !== 0) {
            setCurrentOperation(0)
            setDisplayResult(false)
            Auto.reset()
        }
    }

    return (
        <div className={classes.container}>
            <h1>Welcome to the guess app</h1>

            {!displayResult ?
                <DisplayOperation operation={OPERATIONS[currentOperation].action} /> :
                <DisplayResult result={Auto.getRes()} />
            }

            <OperationsControllerButtons
                currentOperation={currentOperation}
                passToNextOpHanlder={passToNextOpHanlder}
                displayResutlHandler={displayResutlHandler}
                resetHandler={resetHandler}
            />
        </div>
    )
}

export default Guesser