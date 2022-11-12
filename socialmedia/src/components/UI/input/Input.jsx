import React from 'react'
import classes from './Input.module.css'

const Input = ({defaultText, errorText, ...props}) => {
    if(errorText)
        return (
            <div className={classes['error-inp-field']}>
                <input {...props} className={classes['error-inp']} value={defaultText}/>
                <p className={classes['error-text']}>{errorText}</p>
            </div>
        )
        
    return (
        <div className={classes['inp-field']}>
            <input {...props} className={classes['inp']} value={defaultText}/>
        </div>
    )
        
}

export default Input;
