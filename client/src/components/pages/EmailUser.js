 import React from 'react'
 import Container from '@material-ui/core/Container'
 import { Link } from "react-router-dom"
 import { motion } from "framer-motion"
 import { makeStyles } from '@material-ui/core/styles'
 import ChatWindow from "../ChatWindow"
 import emailjs from 'emailjs-com'
 import Popover from '@material-ui/core/Popover'
 import Typography from '@material-ui/core/Typography'


 const useStyles = makeStyles(theme => ({
   root: {
     display: 'flex',
     backgroundColor: 'rgba(255, 255, 255, 0.65)',
   },
   textField: {
     marginLeft: theme.spacing(1),
     marginRight: theme.spacing(1),
    width: 200,

   },
   typography: {
     padding: theme.spacing(2),
     color: "black",
   },
 }));


 const EmailUser = props => {
   const pageVariants = {
     initial: {
       opacity: 0,
       x: "100vw",
       scale: 0.8
     },
     in: {
       opacity: 1,
       x: 0,
       y: 0,
       scale: 1
     },
     out: {
       opacity: 0,
       x: "-100vw",
       scale: 1.2
     }
   };
   const classes = useStyles();

   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = event => {
     setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
     setAnchorEl(null);
   };

   function sendEmail(e) {
     e.preventDefault();
     emailjs.sendForm('default_service', 'portfolio_email_template', e.target, 'user_9nPtsTdb3HAOWUZJUb04Q')
       .then((result) => {
         console.log(result.text);
       }, (error) => {
        console.log(error.text);
       });
   }

   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;

   return (
     <motion.div initial="initial"
       animate="in"
       exit="out"
       variants={pageVariants} className="contentContainer">

       <Container>
       <div id="email">
       <h3 className="pageTitle">Contact</h3>
       <hr></hr>
       <div id="team_form_d">
        
           
           
          <input className="enter_project_name" type="text" name="user_name" placeholder="Name" onBlur={(e) => e.target.placeholder = "Name"}
              onFocus={(e) => e.target.placeholder = ""}
              onChange={(e) => sendEmail(e)}></input>
           
           <input className="enter_project_name" type="text" name="user_email" placeholder="Email" onBlur={(e) => e.target.placeholder = "Email"}
              onFocus={(e) => e.target.placeholder = ""}
              onChange={(e) => sendEmail(e)}></input>
           
           <textarea className="description_t" name="message" placeholder="Enter Message Here" onBlur={(e) => e.target.placeholder = "Enter Message Here"}
              onFocus={(e) => e.target.placeholder = ""}
              onChange={(e) => sendEmail(e)}></textarea>
           </div>
           <div id="buttonContainer">
           <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons"
                onClick={handleClick}>Send Message</motion.button>
         </div>
        
         
         <Popover
           id={id}
           open={open}
           anchorEl={anchorEl}
           onClose={handleClose}
           anchorOrigin={{
             vertical: 'bottom',
             horizontal: 'center',
           }}
           transformOrigin={{
             vertical: 'top',
             horizontal: 'center',
           }}
        >
           <Typography className={classes.typography}>Email Sent</Typography>
        </Popover>
        </div>
      </Container>
    </motion.div >
   )
 }

 export default EmailUser;