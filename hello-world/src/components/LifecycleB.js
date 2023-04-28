import React, { Component } from 'react'

class LifecycleB extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Vlad',
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDIdMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate() {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

    render() {
        console.log('LifeCycleB render')
        return <div>LifecycleB</div>
        }
    }
    
    export default LifecycleB