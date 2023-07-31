import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Coi<span className='primary'>NY</span></h1>
                </div>
               
                <div className='col'>
                    <h5>Developer</h5>
                    <span className='bar'> </span>
                        <a href='https://www.linkedin.com/in/aasif-khan-653618223/' target='blank'>Aasif Khan</a>
                        
                        
                   
                </div>
               
                <div className='col'>
                    <h5>About</h5>
                    <span className='bar'> </span>
                        <p>
                        I am a Web Development enthusiast. 
                        </p>
                        
                        
                   
                </div>
               
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        
                        <a href='/'><FaLinkedin className='icon'/></a>
                        <a href='/'><FaGithub className='icon'/></a>
                </div>
               
            </div>
            <div>
                    <p className='p'>
                        ©️ Copyrights 2023.
                    </p>
            </div>
            
        </div>
        
    )
}

export default Footer
