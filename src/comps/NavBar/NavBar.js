
import classes from './NavBar.module.css';

const NavBar = ()=>{


    return(<div className={classes.NavBar}>
           
               <div className={classes.burgerMenu} >
                   <a href='https://google.com'>
            <div className={classes.burgerMenuItem} />
             <div className={classes.burgerMenuItem} />
             <div className={classes.burgerMenuItem} />
             </a>
            </div>


            <p className={classes.login}> login</p>
    </div>)
}


export default NavBar;