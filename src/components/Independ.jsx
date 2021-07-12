import React from "react";
import HomeButton from './HomeButton';

export default function (props) {
    return(
        <div>
            <HomeButton />
            <p>INDEPEND</p>
            {props.props}
        </div>
    )
}
