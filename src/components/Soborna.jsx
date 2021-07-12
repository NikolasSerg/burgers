import React from "react";
import HomeButton from './HomeButton';
import headerImg from '../assets/img/burgerBandera.jpg'
export default function (props) {

    return(
        <>
            <header className='container center sobornaHeaderImgUrl headerConfig' style={{backgroundSize: 'cover'}}>
                <div className='rating'>РЕЙТИНГ: ★★★★</div>
                <div>
                    <h1>HOT burger</h1>
                    <p>швидка доставка 20хв</p>
                </div>
                <p>адреса</p>
            </header>
        </>
    )
}
