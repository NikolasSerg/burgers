import React from "react";
import { useHistory } from "react-router-dom";

export default function HomeButton() {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <button className='button' type="button" onClick={handleClick}>
            ГОЛОВНА
        </button>
    );
}
