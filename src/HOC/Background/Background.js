import classes from './Background.module.css'
import React from 'react'

const Background = (props)=>{


      const menuState = props.menuState

return(<div onClick={props.menuClose}  className={classes.Background}>

              <div className={classes.secondLayerBG} >

               {props.children}
              </div> 

        </div>)
  
}

export default Background