import React from 'react';
import {Toolbar,AppBar,MenuIcon,Button,IconButton} from '@material-ui/core/Toolbar';


function App () {
  return (

    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          BookStore
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
    );
  }
    
export default App; 
