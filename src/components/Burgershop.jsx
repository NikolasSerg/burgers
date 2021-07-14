import React from "react";
import HomeButton from './HomeButton';

export default function (props) {
    return(
        <div>
            <HomeButton />
            <p>Shop</p>
            {props.props}
        </div>
    )
}
