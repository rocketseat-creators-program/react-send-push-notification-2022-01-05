import React from 'react';
import {useStyles} from './style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            Send Notification
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export {DenseAppBar as AppBar}