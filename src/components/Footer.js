import React from 'react';
import { ReactComponent as FooterDots } from '../assets/footer-dots.svg';
import { ReactComponent as Github } from '../assets/githubb.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';

const Footer = () => {
    const anshulLinks = {
        github: 'https://github.com/anshulsharma123',
        llinkedin: 'https://www.linkedin.com/in/anshul-sharma-8438a619a/',
        website: '',
        email: 'anshulmudgil2001@gmail.com'
    };
    return (
        <div className='footer'>
            <div className='footer-inner'>
                <div className='footer-left'>
                    <h3>Developers</h3>
                    <p><a target='_blank' rel='noreferrer' href={anshulLinks.website}>Anshul Sharma</a></p>
                </div>
                <div className='footer-right'>
                    <h3>Links</h3>
                    <div className='links'>
                        <a target='_blank' rel='noreferrer' href={anshulLinks.github}><Github className='github' /></a>
                        <a target='_blank' rel='noreferrer' href={anshulLinks.llinkedin}><Linkedin className='linkedin' /></a>
                        <a target='_blank' rel='noreferrer' href={`mailto:${anshulLinks.email}`}><Mail className='mail' /></a>
                    </div>
                    <p className='copyright'>&copy;</p>
                </div>
            </div>
            <h3 id='visit'>Play Sudoku</h3>
            <FooterDots id='footer-dots' />
        </div>
    );
};

export default Footer;
