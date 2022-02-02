import Landing from './comps/Landing/Landing';
import classes from './App.module.css';
import Background from './HOC/Background/Background';
import NavBar from './comps/NavBar/NavBar';
import Footer from './comps/Footer/Footer'
import SecondBlock from './comps/SecondBlock/SecondBlock';
import ThirdBlock from './comps/ThirdBlock/ThirdBlock';
import AboutMe from './comps/AboutMe/AboutMe';


function App() {
  return (<div className={classes.App}>


<Background>
  {/* <NavBar/> */}
   <Landing/>
<SecondBlock/>
<ThirdBlock/>
<AboutMe/>
<Footer/>
</Background>



    </div>
  );
}

export default App;
