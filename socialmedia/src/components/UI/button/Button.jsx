import React, { useState } from 'react'
import classes from './Button.module.css'

const Button = ({children, backgroundColor, hoverColor, ...props}) => {

    const [hover, setHover] = useState()


    return (
        <div className={classes['btn-field']}>
          <button {...props} className={classes['btn']} 
            onMouseEnter={(event) => {setHover(true)}}
            onMouseLeave={(event) => {setHover(false)}}
            style={
            {
              backgroundColor: hover ? hoverColor : backgroundColor
            }}>{children}</button>
        </div>
    )
}

export default Button;
