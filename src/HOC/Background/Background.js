import classes from './Background.module.css'
import React from 'react'

const Background = (props)=>{

return(<div className={classes.Background}>
              
                   <div>{props.children}</div> 
        
             

        </div>)
  
}

export default Background