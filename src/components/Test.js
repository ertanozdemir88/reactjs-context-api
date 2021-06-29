import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 10
        }

        console.log("constructor")

    }

    componentDidMount() {
        console.log("ComponentDidMount");
        // Api istekleri
        this.setState({ a: 20 });
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("ComponentDidUpdate");
    }

    // shouldComponentUpdate(){
    //     console.log("ShouldComponentUpdate");

    //     return true;
    // }

    

    render() {

        console.log("Render");

        return (
            <div>

            </div>
        )
    }
}

export default Test;