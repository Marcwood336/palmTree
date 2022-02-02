
import classes from './AboutMe.module.css';
import palmTree from '../../assets/Palm_1.svg'


const AboutMe = ()=>{

    return(<div className={classes.AboutMe}>




          <div className={classes.content} >
              <div> 
                   <h2 className={classes.personalityTitle} >
                          ENFJ-A DIPLOMAT PEOPLE MASTERY
                </h2>
                <h2 className={classes.personalityTitle2}>PERSONALITY TEST</h2>
     
              <p className={classes.personalityParagraph}>Protagonists (ENFJs) feel called to serve a greater purpose in life. Thoughtful and idealistic, these personality types strive to have a positive impact on other people and the world around them. They rarely shy away from an opportunity to do the right thing, even when doing so is far from easy. Protagonists are born leaders, which explains why these personalities can be found among many notable politicians, coaches, and teachers. Their passion and charisma allow them to inspire others not just in their careers but in every arena of their lives, including their relationships. Few things bring Protagonists a deeper sense of joy and fulfillment than guiding friends and loved ones to grow into their best selves.
                </p>
            </div>
          </div>
<div className={classes.bottomBlock}>
          <div className={classes.languagesContainer}>
                <div className={classes.languages} >
                     <p>Italian</p>
                     <p>English</p>
                     <p>Spanish</p>
                     <p>Dutch</p>
                     <p>French</p>
                </div>
                  <div>
                     <p>100%</p>
                     <p>95%</p>
                     <p>95%</p>
                     <p>65%</p>
                     <p>30%</p>
                </div>
         </div>

         <div className={classes.palmTree_container}>
             <img className={classes.palmTree} src={palmTree} />
         </div>

   </div>      

    </div>)
}



export default AboutMe;




