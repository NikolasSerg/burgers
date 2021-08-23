import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: "300px",
        height: "250px",
        paddingBottom: "1rem",
        borderRadius: "15px"
    },
    position: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    select: {
        width: "250px"
    }

})

function Home({shops}) {
    const classes = useStyles();
    return (
        <Box sx={{
            height: "100vh",
            backgroundImage: "url('./assets/img/burgerHome.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className={classes.position}>
            <h1 className='font-effect-fire-animation'>The HOTTEST Burgers</h1>
            <div className={`${classes.wrapper +' '+ classes.position}`}>
                <h2 className='font-effect-shadow-multiple'>МИ В ВАШОМУ МІСТІ</h2>
                <FormControl>
                    <InputLabel id='burger-shops'>burgers shop</InputLabel>
                    <Select labelId='burger-shops' label='burgers shop' className={classes.select}>
                        {
                            shops.map((item, index) => {
                                return <MenuItem key={index} value={item.address}>{item.address}</MenuItem>
                            })
                        }
                    </Select>
                    <Button variant="outlined" style={{margin: "1.5rem auto", width: "200px"}}>ПЕРЕЙТИ</Button>
                </FormControl>
            </div>
        </Box>
    )
}

export default Home;