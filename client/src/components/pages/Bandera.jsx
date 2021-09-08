import React from 'react';
import NavBar from '../assets/Navbar';
import Card from '../assets/Card';
import {makeStyles} from '@material-ui/core/styles';
import {Container, CssBaseline} from "@material-ui/core";
import HomeBtn from "../assets/HomeBtn";


function Bandera(props) {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    return (
        <>
            <CssBaseline/>
            <NavBar address={props.address}/>
            <Container>
                <Card/>
                <HomeBtn />
            </Container>
        </>
    )
}

export default Bandera;