import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return <h1>Hi {heroName} a.k.a {name}</h1>
    }    
}

export default Welcome;
