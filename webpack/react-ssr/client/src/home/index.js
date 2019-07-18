import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { test } from '../../redux/actions'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount () {
        // this.props.test([1, 2, 3])
    }

    componentDidMount () {
        const { dispatch, selectedPost, test, list } = this.props
    }

    handleButton = e => {
        this.props.history.push('/login')
    }

    loadData = e => {
        console.log(222)
    }

    render () {
        let { list } = this.props
        console.log(list, '111111111111111')
        return (
            <div>
                Home
                {
                    list.map(item => (
                        <div>{item}</div>
                    ))
                }
                <button onClick={this.handleButton}>按钮</button>
            </div>
        )
    }

}

let mapStateToProps = state => {
    return {
        list: state.login.list
    }
    console.log(state)
}

let home = connect(
    mapStateToProps,
    { test }
)(Home)

home.getInintalProps = store => {
    store.dispatch(test([1, 2, 3, 45, 6]))
    // console.log(store.dispatch, '==========================')
}

export default home