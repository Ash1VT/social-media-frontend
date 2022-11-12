import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import classes from './Loader.module.css'

const Loader = ({text, ...props}) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.text}>{text}</h3>

      <div className={classes.spinner}>
          <HashLoader {...props}/>
      </div>
    </div>
  )
}

export default Loader;
