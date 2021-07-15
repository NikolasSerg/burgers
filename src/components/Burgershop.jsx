import React from "react";
import HomeButton from './HomeButton';
import Order from "./Order";
import MenuAdmin from './MenuAdmin';

export default function Burgershop(props) {
    let style = {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red',
    }
    let div = {
        backgroundColor: '#b2dfdb',
        border: '2px solid #009688'
    }
    return (
        <div style={style}>
            <div style={div}>
                <HomeButton/>
                <p>Shop</p>
                {props.props}
            </div>
            <div style={div}>
                <Order/>
            </div>
            <div style={div}>
                <MenuAdmin/>
            </div>
        </div>
    )
}
