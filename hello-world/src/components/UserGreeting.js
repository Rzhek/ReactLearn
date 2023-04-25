import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        // if (this.state.isLoggedIn) 
        // {
        //     return (
        //         <div>Welcome Vlad</div>
        //         )
        //     } else {
        //         return (
        //             <div>Welcome Guest</div>
        //             )
        //         }
        
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <span>Vlad</span> 
        // } else {
        //     message = <span>Guest</span>
        // }
        
        // return <div>Welcome {message}</div>

        return (
            this.state.isLoggedIn && <div>Welcome Vlad</div>
        )

    } 
}

export default UserGreeting