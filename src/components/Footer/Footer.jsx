import React from 'react';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './styles/Footer.module.sass';

const Footer = () => {
	return (
    <div className={styles.footer}>
      <h4>MARVEL REACT</h4>
      <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex', my:1 }}>
        <IconButton aria-label='Linkedin.com' onClick={() => window.open('https://www.linkedin.com/in/cfoostdijk/')}>
          <LinkedInIcon fontSize='large' />
        </IconButton>
        <IconButton aria-label='Linkedin.com' onClick={() => window.open('https://github.com/cfooostdijk')}>
          <GitHubIcon fontSize='large' />
        </IconButton>
      </Box>
      <p className='col-sm'>
        Diseñado y desarrollado por Cristian Oostdijk | © 2023 Todos los derechos reservados.
      </p>
    </div>
  )
}

export default Footer;
