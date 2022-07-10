import React from 'react'
import { OPERATIONS } from '../../utils/operations'
import CustomButton from '../UI/CustomButton'
import classes from './OperationsControllerButtons.module.css'

const OperationsControllerButtons = ({ currentOperation, passToNextOpHanlder, displayResutlHandler, resetHandler }) => {
    return (
        <div className={classes.flex}>
            <CustomButton
                onAction={resetHandler}
                sx="primary"
                label="Reset"
            />
            {
                (currentOperation < OPERATIONS.length - 1) ?
                    <CustomButton
                        onAction={passToNextOpHanlder}
                        label='Continue'
                        disabled={false}
                        sx='continueButton'
                    /> :
                    <CustomButton
                        onAction={displayResutlHandler}
                        label='Résultat'
                        disabled={false}
                        sx='continueButton'
                    />
            }
        </div>
    )
}

export default OperationsControllerButtons