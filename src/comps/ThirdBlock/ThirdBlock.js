import classes from './ThirdBlock.module.css';


const ThirdBlock = ()=>{

    return(<div className={classes.ThirdBlock}>
        <div>
            <h2 className={classes.title}>Testing</h2>
            <p className={classes.paragraph}>
                 Noyadays the web development industry has an extremely fast pace, the use cases are much more than 5 years ago for example. It is fundamental to test website and application on many different devices and browsers to make sure that the interfaces are always delivered in the best way possible to the client.
            </p>

                <div className={classes.skillsContainer} >
                <div>Chrome</div>
                <div>Mozilla</div>
                <div>Safari</div>
                <div>Safari Mobile</div>
                 <div>Opera</div>
                <div>Postman</div>
                <div>VS code</div>
                
                </div>
        </div>


        <div>
                   <h2 className={classes.title}>Managing</h2>
                  <p className={classes.paragraph}>
Today's technologies evolve at a quicker rate each year. Nowadays is fundamental to be able to manage and organize the various technologies implemented in our work to maintain high standards in terms of usability and dependencies update. When it comes to web development it is good practice to align recurrently with the de facto standards over time in order to prevent deprecation errors as well as security flaws.
            </p>
               <div className={classes.skillsContainer} >
                <div>NPM</div>
                <div>Git</div>
                <div>GitHub</div>
                <div>Heroku</div>
               
                </div>
        </div>
    </div>)
}



export default ThirdBlock;