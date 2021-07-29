import React from 'react';
import { Box, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <Box bgcolor="primary">
        <Avatar
          variant="square"
          alt={'buen sabor'}
          src={'/images/logos/logoBuenSabor.png'}
          className={classes.large}
        ></Avatar>
      </Box>
    </div>
  );
};

export default Navbar;
