import React from "react";
import {useHistory} from "react-router-dom";
import {Box} from "@material-ui/core";

export default function HomeButton() {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <Box>
            <button className='button' type="button" onClick={handleClick}>
                ГОЛОВНА
            </button>
        </Box>
    );
}
