
import classes from './NavBar.module.css';


const NavBar = (props) => {






    return (<div><div className={classes.NavBar}>


        {/* work in progress  ->*/}

        {/* <div onClick={props.menuOpen} className={classes.burgerMenuIcon} >
               
                <div className={classes.burgerMenuItem} />
                <div className={classes.burgerMenuItem} />
                <div className={classes.burgerMenuItem} />
            
            </div> */}

        {/* <p onClick={props.openLogin} className={classes.login}> login</p> */}
    </div>


        <div className={props.screenState.menuState ? classes.menuBlockOn : classes.menuBlockOff}>
            <div className={classes.menuOn} >
                WORKING ON IT
            </div>

            <div onClick={props.menuClose} className={classes.modalOn}>

            </div>
        </div>

        <div className={props.screenState.loginBannerState ? classes.loginBannerModal : classes.loginBannerModalOff} onClick={props.openLogin} />

        <div className={props.screenState.loginBannerState ? classes.loginBanner : classes.loginBannerOff}>


            <div className={classes.inputContainer}>

                <div className={classes.inputLogin} type='text'>
                    <p>User</p>
                    <input placeholder='WORKING ON IT' />
                </div>

                <div className={classes.inputLogin} type='text'>
                    <p>Password</p>
                    <input placeholder='WORKING ON IT' />
                </div>


            </div>

            <button className={classes.loginButton} >Login</button>



        </div>


    </div>)
}


export default NavBar;