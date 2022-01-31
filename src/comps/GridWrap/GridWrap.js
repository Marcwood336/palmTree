
import classes from './GridWrap.module.css';

const GridWrap = (props)=>{

    return(<div className={classes.GridWrap} >{props.children}</div>)
}




export default GridWrap;