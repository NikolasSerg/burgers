import React from 'react';
import Card from '../assets/Card';
import {makeStyles} from '@material-ui/core/styles';
import {Container, CssBaseline} from "@material-ui/core";
import Header from "../assets/Header";

function Template(props) {
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
            <Header {...props}/>
            <Container>
                <Card/>
            </Container>
        </>
    )
}

export default Template;