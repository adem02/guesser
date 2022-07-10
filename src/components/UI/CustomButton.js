import React from 'react'
import classes from './CustomButton.module.css'

const CustomButton = ({ sx, label, disabled = false, onAction }) => {
    return (
        <button
            className={`${classes.button} ${classes[sx]}`}
            onClick={onAction}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default CustomButton