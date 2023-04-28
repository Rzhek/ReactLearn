import React, { Component } from 'react'
import './myStyles.css'

export class Stylesheets extends Component {
    constructor(props) {
      super(props)
      this.className = this.props.primary ? 'primary' : ''
    
      this.state = {
         
      }
    }
    render() {
        return (
            <h1 className={`${this.className} font-xl`}>Stylesheets</h1>
            )
        }
    }
    
    export default Stylesheets