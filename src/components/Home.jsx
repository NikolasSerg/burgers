import React from 'react';

class Home extends React.Component {
    state = {
        points: [
            {
                address: "вул.С.Бандери, 15",
                url: '',
                check: false
            },
            {
                address: "вул.Соборна, 25",
                url: '',
                check: false
            },
            {
                address: "вул.Незалежності, 42",
                url: '',
                check: false
            }
        ],
        visible: false,
        disable: true,
        url: '',
        check: false

    }
    showPoint = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    checkList = (index) => {
        console.log(index, ' - index');
        console.log(this.state.points[index].check, ' - check');
        console.log(this.state.points[index], ' - points');
        let pointsNew = this.state.points;
        this.setState({
            url: this.state.points[index].url
        })
        this.setState({
            disable: !this.state.disable
        })
        pointsNew[index].check = !pointsNew[index].check;

        this.setState({
            points: pointsNew
        })
    }
check

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
                                        <li className={item.check ? 'select' : null}
                                            key={index}
                                            onClick={() => this.checkList(index)}>
                                            {item.address}
                                        </li>
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