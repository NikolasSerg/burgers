import background from '../assets/img/404.jpg'

import HomeBtn from '../assets/HomeBtn';
import {Box, Button, Card, Container, CssBaseline, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import React from "react";
import {useHistory} from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
    },
    grid: {
        height: "100%"
    },
    card: {
        height: '300px',
        width: '300px',
        backdropFilter: 'blur(4px)',
        background: 'rgba(255,255,255,0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    btn: {
        margin: '0 auto'
    },
    font: {
        fontFamily: "'Caveat', cursive",
        color: '#2f3d44'
    }
}))

export default function NotFound() {
    const classes = useStyle();
    const history = useHistory();

    return (
        <Container className={classes.background}>
            <CssBaseline />
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  className={classes.grid}
            >
                <Card className={classes.card}>
                    <Box textAlign='center' margin='2rem 0'>
                        <Typography className={classes.font} variant="h3">ВИБАЧТЕ</Typography>
                        <Typography className={classes.font} variant="h5">сторінка не знайдена</Typography>
                    </Box>
                    <Button variant="outlined" color="primary" className={classes.btn} onClick={() => history.push('/')}>
                        Primary
                    </Button>
                </Card>
            </Grid>
        </Container>
    )
}