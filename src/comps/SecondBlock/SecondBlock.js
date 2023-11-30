import classes from './SecondBlock.module.css';
//assets import
import crownIcon from '../../assets/crown-icon.svg'

const SecondBlock = () => {

    return (<div><div className={classes.SecondBlock} >
        <h1 className={classes.title}>Coding Stack</h1>
        <p className={classes.paragraph} >My coding and design skills were mainly self-taught throughout the years that followed my university career. In fact after graduading in "languages and communication during the forth industral revolution", I started working as graphic designer and content creator. While covering the above-mentioned position I discovered my true passion: programming, in which I see a very powerful and creative tool to manipulate and address information, a fundamental concept in design and communication in general.</p>

        <div className={classes.skillsContainer} >

            <div>Vanilla JS</div>
            <div><img src={crownIcon} /> React JS</div>
            <div>Next JS</div>
            <div> <img src={crownIcon} /> Angular JS</div>
            <div>Node JS</div>
            <div> <img src={crownIcon} /> Express JS</div>
            <div>Docker</div>
            <div>HTML5</div>
            <div>SCSS</div>
            <div>Mongo DB</div>
            <div>PostgreSQL</div>
            <div>Git</div>
            <div>Heroku</div>
            <div>Azure DevOps </div>
            <div>Shopware6</div>



        </div>
    </div>

        <div className={classes.SecondBlock} >
            <h1 className={classes.title}>Design stack</h1>
            <p className={classes.paragraph} >Organizing is a key feature for success, and design is responsible for determining and then shaping the structural and aesthetic traits of any interface or piece of information. Personally, I am a big fan of visualizing the end result of a project because delineating the guidelines that will style the outcome of the project directly provides huge leverage in terms of strategic decisions and grants a linear evolution of the work. Design is a process of research and individualization of a specific identity.</p>

            <div className={classes.skillsContainer} >

                <div>  <img src={crownIcon} /> Figma</div>
                <div>Zeppelin</div>
                <div>Font Awesome</div>
                <div>Adobe XD</div>
                <div> <img src={crownIcon} /> Adobe Illustrator</div>
                <div>Adobe InDesign</div>
                <div>Adobe Photoshop</div>



            </div>


        </div>



    </div>)
}


export default SecondBlock;