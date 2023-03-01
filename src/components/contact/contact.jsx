import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaMedium} from 'react-icons/fa';
import './contact.css';
import SideBar from "../sidebar/sideBar";
import ThemeIcon from "../theme_icon/themeIcon"
import SocialMediaCard from "../social_media_card/social_media_card"

const Contact = (props) => {

    const pageVariants = {
        initial: {
          opacity: 0,
          x: "-100vw"
        },
        in: {
          opacity: 1,
          x: 0
        },
        out: {
          opacity: 0,
          x: "100vw"
        }
      };
      
      const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
      };

  return (
    <div>
        <motion.div
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
        >
            <div className="contact-main-container">

                <div className='contact-container2'>
                    <h2>Don't hesitate to reach out! I'm just a click away.</h2>
                    <div className="social-field-container">
                        <SocialMediaCard  
                            name='linkedin' icon={<FaLinkedin className="social-icon linkedin" />} link={'https://linkedin.com'}
                        />
                        <SocialMediaCard  
                            name='github' icon={<FaGithub className="social-icon github" />} link={'https://github.com'}
                        />
                        <SocialMediaCard  
                            name='twitter' icon={<FaTwitter className="social-icon twitter" />} link={'https://twitter.com'}
                        />
                        <SocialMediaCard  
                            name='medium' icon={<FaMedium className="social-icon medium" />} link={'https://twitter.com'}
                        />
                    </div>
                </div>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="contact-container"
                >
                <h2>Get In Touch</h2>
                <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's connect and create something amazing together!</p>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                </motion.div>
            </div>
        </motion.div>
        <SideBar />
    <ThemeIcon {...props} />
    </div>
    

    
  );
};

export default Contact;
