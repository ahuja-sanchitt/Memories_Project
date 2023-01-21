import React, {useState,useEffect} from 'react';

import { Container, AppBar, Typography, Grow, Grid} from '@mui/material';

import {useDispatch} from 'react-redux'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

import {getPosts} from './actions/posts'
import Memories from './images/memes.png'
const App= () => {
    const [currentId, setCurrentId]=useState(null);
    const dispatch=useDispatch();
    const classes=useStyles();

  useEffect(() =>{
    dispatch(getPosts());
  }, [currentId,dispatch]);
    return (
        <Container maxidth="lg">
           <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center"> Memories </Typography>
            <img className={classes.image} src={Memories} alt="memories" height="70" />
            </AppBar> 

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} > 
                        <Grid item xs={12} sm={7}> 
                            <Posts setCurrentId={setCurrentId} />                       
                        </Grid>
                        <Grid item xs={12} sm={4}>  
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        
    );
}

export default App;