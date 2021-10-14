import React, {useEffect} from 'react';
import Card from '../assets/Card';
import {Container, CssBaseline} from "@material-ui/core";
import Header from "../assets/Header";

function Template(props) {
    useEffect(() => {
        let current = localStorage.getItem('currentPage');
        if(current !== null) {
            console.log('ДАНІ Є В СТОРІДЖ TEMPLATE')
        }
    }, [])
    return (
        <>
            <CssBaseline/>
            <Header />
            <Container>
                {props.address}
                <Card/>
            </Container>
        </>
    )
}

export default Template;