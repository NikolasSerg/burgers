import React from "react";

class Header extends React.Component{
    state = {
        rating: '★★★',
        price: 35,
        until: '10.07.2020'

    }
    render() {
        return(
            <div className="header-logo">
                <p className='rating'>Рейтинг:{this.state.rating}</p>
                {this.state.price !== '' ? <p className='price-logo'> {this.state.price}</p>: null}
            </div>
        )
    }
}

export default Header