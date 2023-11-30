import Landing from './comps/Landing/Landing';
import classes from './App.module.css';
import Background from './HOC/Background/Background';
import NavBar from './comps/NavBar/NavBar';
import Footer from './comps/Footer/Footer'
import SecondBlock from './comps/SecondBlock/SecondBlock';
import ThirdBlock from './comps/ThirdBlock/ThirdBlock';
import AboutMe from './comps/AboutMe/AboutMe';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';


function App() {


    const screenStateInitial = {
        menuState: false,
        loginBannerState: false
    }


    const [screenState, setScreenState] = useState(screenStateInitial);





    function loginToggle() {


        setScreenState((prevState, nextState) => {
            console.log(prevState);
            return { loginBannerState: !prevState.loginBannerState }
        })
    }



    function menuOpen() {

        setScreenState((prevState, nextState) => {


            return ({ menuState: !prevState.menuState })
        })
    }



    function menuClose() {

        setScreenState(() => {
            return { menuState: false }
        })
    }

    return (<div className={classes.App}>


        <Background menuState={screenState.menuState} >
        <Analytics />
            <NavBar openLogin={loginToggle} menuClose={menuClose} menuOpen={menuOpen} screenState={screenState} />
            <Landing />
            <SecondBlock />
            <ThirdBlock />
            <AboutMe />
            <Footer />
        </Background>



    </div>
    );
}

export default App;
