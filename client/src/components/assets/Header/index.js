import React from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';

const Header = ({...props}) => (
    <>
        <Navbar {...props}/>
        <Banner />
    </>
);

export default Header;