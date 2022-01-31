import Landing from './comps/Landing/Landing';
import classes from './App.module.css';
import Background from './HOC/Background/Background';
import NavBar from './comps/NavBar/NavBar';
import Footer from './comps/Footer/Footer'
import GridWrap from './comps/GridWrap/GridWrap';
import SecondBlock from './comps/SecondBlock/SecondBlock';
function App() {
  return (
    <div className={classes.App}>


  
<NavBar/>

<Landing/>

<Background>
 
<SecondBlock/>
<SecondBlock/>
     <GridWrap/>
</Background>


    </div>
  );
}

export default App;
