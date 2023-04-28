import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Vlad',
        }
        console.log('LifeCycleA constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifeCycleA componentDIdMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate() {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'new name',
        })
    }
    
    render() {
        console.log('LifeCycleA render')
        return (<div>
            LifecycleA
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB />
            </div>)
        }
    }
    
    export default LifecycleA