import React from "react";

class AddBurgers extends React.Component {
    styleForm = {
        bodred: '1px solid #000',
        display: 'flex',
        flexDirection: 'column',
        // lineHeight: '5.5rem'
    }
    styleFieldset = {
        margin: 0,
        padding: 0
    }
    styleButton = {
        backgroundColor: '#ff7043'
    }
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    render() {
        return (
            <form style={this.styleForm} className='select'>
                <fieldset style={this.styleFieldset}>
                    <input type="text" placeholder='назва товару'/>
                    <input type="text" placeholder='ціна'/>
                </fieldset>
                <select name="status">
                    <option value="able">в наявності</option>
                    <option value="unable">відсутній</option>
                </select>
                <textarea name="desc" placeholder='опис товару'/>
                <input type="text" placeholder='url image'/>
                <button style={this.styleButton}>ДОБАВИТИ</button>
            </form>
        )
    }
}

export default AddBurgers;
