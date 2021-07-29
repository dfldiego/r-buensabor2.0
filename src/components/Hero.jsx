import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          /*eslint no-undef: "error"*/
          /*eslint-env node*/
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/images/hamburguesa1.jpg'
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zindex: -1
        }}
      >
        <Navbar />
      </Box>
    </>
  );
};

export default Header;
