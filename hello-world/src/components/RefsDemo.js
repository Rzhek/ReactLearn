import React, { Component } from 'react'

class RefsDemo extends Component {
    
    constructor(props) {
        super(props)
        
        // 1st
        this.inputRef = React.createRef()

        // 2nd
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
        
    }
    
    componentDidMount() {
        // To make an input field focused on the page refresh
        this.inputRef.current.focus()
        
        // console.log(this.inputRef)

        // Second approach
        if (this.cbRef) {
            // this.cbRef.focus()
        }

    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
            <input ref={this.inputRef} type='text'/>
            <input ref={this.setCbRef} type='text'/>
            <button onClick={this.clickHandler}>Click</button>
            </div>
            )
        }
    }
    
    export default RefsDemo