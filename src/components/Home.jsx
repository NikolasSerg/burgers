import React from 'react';

class Home extends React.Component {
    state = {
        points: [
            {
                address: "вул.С.Бандери, 15",
                url: 'bandera',
                check: false
            },
            {
                address: "вул.Соборна, 25",
                url: 'soborna',
                check: false
            },
            {
                address: "вул.Незалежності, 42",
                url: 'nezalejnist',
                check: false
            }
        ],
        visible: false,
        disable: true,
        url: '',
        check: true

    }
    showPoint = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    checkList = (index) => {
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
    test = (event) => {
        let urlNew= '';
        let pointsNew = this.state.points.map((item, index) => {
            if(event.target.id == index) {
                item.check = true;
                urlNew = item.url
                return item
            } else {
                item.check = false;
                return item
            }
        });
        this.setState({
            points: pointsNew,
            url: urlNew
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='container'>
                    <h2>МИ В ВАШОМУ МІСТІ</h2>
                    {this.state.visible ?
                        <div className='container'
                        onClick={this.test}
                        >
                            {
                                this.state.points.map((item, index) => {
                                    return (
                                        <label htmlFor={index} className={item.check ? 'select' : null} >
                                            <input type='radio' name='point' id={index}
                                                key={index}
                                                // onClick={() => this.checkList(index)}
                                                value={item.address}
                                            />
                                            {item.address}
                                        </label>
                                    )
                                })
                            }
                        </div>
                        : null
                    }
                    {
                        this.state.visible === false ?
                            <button onClick={this.showPoint}>ВИБРАТИ</button> :
                            null
                    }
                    {this.state.visible === true ?
                        <button disabled={this.state.url === '' ? 'disabled' : null}>ПЕРЕЙТИ</button> :
                        null
                    }
                </div>
            </div>
        )
    }

}

export default Home;