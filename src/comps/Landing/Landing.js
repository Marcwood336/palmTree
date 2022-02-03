import photo from '../../assets/backgroundHD.jpg';
import classes from './Landing.module.css';

const Landing = ()=>{




    return(<div  className={classes.Landing}>
        <img className={classes.photo} src={photo} />
          <div className={classes.nameContainer}>
         <p className={classes.myName} >Marc Abdel Wahed</p> 
            <p className={classes.developerTag} >JAVASCRIPT DEVELOPER</p>
        </div>
        <div className={classes.blackBlock} ></div>
      
        </div>)
}



export default Landing;

