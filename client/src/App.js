import React from "react";
import './App.scss';
import Router from "./components/Router";

class App extends React.Component {
    state = {
        shops: []
    }
    componentDidMount() {

        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => this.setState({shops: data}))
    }

    render() {
        return (
            <div className="App">
                <Router shops={this.state.shops}/>
            </div>
        );
    }
}

export default App;
