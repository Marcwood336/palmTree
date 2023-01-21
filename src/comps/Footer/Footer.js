
import classes from './Footer.module.css';
import GitHubLogo from '../../assets/gitHubLogo.svg';
import LinkedIn from '../../assets/linkedInLogo.png';
import CodeWars from '../../assets/codewars.svg'

const Footer = () => {

    return (<div className={classes.Footer}>


        <a href='  https://www.codewars.com/users/Marcwood336' target='blank' ><img className={classes.footer_icon} src={CodeWars} /></a>

        <a href='https://github.com/Marc336' target='blank' ><img className={classes.footer_icon} src={GitHubLogo} /></a>



        <a href='https://www.linkedin.com/in/marcabdelwahed-39969477/' target='blank'><img className={classes.footer_icon} src={LinkedIn} /></a>




    </div>)
}




export default Footer;