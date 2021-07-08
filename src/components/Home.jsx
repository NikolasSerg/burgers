import React from 'react';

class Home extends React.Component {
    state = {
        points: [
            {
                address: "вул.С.Бандери, 15",
                url: ''
            },
            {
                address: "вул.Соборна, 25",
                url: ''
            },
            {
                address: "вул.Незалежності, 42",
                url: ''
            }
        ],
        visible: false,
        disable: true

    }
    showPoint = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='container'>
                    <h2>МИ В ВАШОМУ МІСТІ</h2>
                    {this.state.visible ?
                        <ul>
                            {
                                this.state.points.map((item, index) => {
                                    return (
                                        <li key={index}>{item.address}</li>
                                    )
                                })
                            }
                        </ul>
                        : null
                    }
                    {
                        this.state.visible === false ?
                            <button onClick={this.showPoint}>ВИБРАТИ</button> :
                            null
                    }
                    {this.state.visible === true ?
                        <button disabled={this.state.disable}>ПЕРЕЙТИ</button> :
                        null
                    }
                </div>
            </div>
        )
    }

}

export default Home;