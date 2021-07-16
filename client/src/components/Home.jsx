import React from 'react';

class Home extends React.Component {
    state = {
        points: [
            {
                address: "вул.С.Бандери, 15",
                url: 'bandera',
            },
            {
                address: "вул.Соборна, 25",
                url: 'soborna',
            },
            {
                address: "вул.Незалежності, 42",
                url: 'independ',
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
        let urlNew = '';
        let pointsNew = this.state.points.map((item, index) => {
            if (+event.target.id === index) {
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
    handleSendPage= (url) => {
        this.props.history.push(`/hot-burgers/${url}`)
    }
    style = {
        height: '100vh',
        marginTop: '1.5rem',
        backgroundColor: 'RGBA(255,111,0,0.55)'
    }

    render() {
        return (
            <div className='container center homeHeaderImgUrl'
                 style={{height: this.style.height, backgroundSize: 'cover'}}>
                <div className='container center'>
                    <h1 className='font-effect-fire-animation'>The HOTTEST Burgers</h1>
                    <h2 className='font-effect-shadow-multiple'>МИ В ВАШОМУ МІСТІ</h2>
                    {this.state.visible ?
                        <div className='container' onClick={this.test}
                             style={{backgroundColor: this.style.backgroundColor}}>
                            {
                                this.state.points.map((item, index) => {
                                    return (
                                        <label style={{fontSize: '1.4rem', padding: '0.6rem'}} htmlFor={index}
                                               className={item.check ? 'select' : null} key={index}>
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
                            <button className='button' onClick={this.showPoint}>ВИБРАТИ</button> :
                            null
                    }
                    {this.state.visible === true ?
                        <button style={{marginTop: this.style.marginTop}} className='button'
                                disabled={this.state.url === '' ? 'disabled' : null}
                                onClick={() => this.handleSendPage(this.state.url)}
                        >
                            ПЕРЕЙТИ
                        </button>
                        :
                        null
                    }
                </div>
            </div>
        )
    }

}

export default Home;