import React from 'react'
import classes  from './Backdrop';

const Backdrop = (props) =>(
    props.show?<div className={classes.Backdrop}></div>:null
)

export default Backdrop