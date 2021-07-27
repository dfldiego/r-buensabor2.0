import React from 'react';
import { Box } from '@material-ui/core';

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
          backgroundSize: 'cover'
        }}
      ></Box>
    </>
  );
};

export default Header;
