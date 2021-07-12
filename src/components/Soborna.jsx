import React from "react";
import HomeButton from './HomeButton';

export default function (props) {
    return(
        <div>
            <HomeButton />
            <p>SOBORNA</p>
            {props.props}
        </div>
    )
}
