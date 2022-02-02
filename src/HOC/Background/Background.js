import classes from './Background.module.css'
import React from 'react'

const Background = (props)=>{

return(<div className={classes.Background}>

              <div className={classes.secondLayerBG} >

               {props.children}
              </div> 

        </div>)
  
}

export default Background