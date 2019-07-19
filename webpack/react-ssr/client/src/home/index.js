import { Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { test, testAsync } from '../../redux/actions'

import './home.css'

import Login from '../login/index'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount () {
        // this.props.test([1, 2, 3])
    }

    componentDidMount () {
        import(Router).then(res => {
            console.log(res)
        })
        const { dispatch, selectedPost, test, list } = this.props
    }

    handleButton = e => {
        this.props.history.push('/login')
    }

    loadData = e => {
    }

    render () {
        let { list } = this.props
        return (
            <div>
                Home
                {
                    list.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                }
                <button className="home-submit" onClick={this.handleButton}>按钮</button>
            </div>
        )
    }

}

let mapStateToProps = state => {
    return {
        list: state.login.list
    }
}

let home = connect(
    mapStateToProps,
    { test }
)(Home)

home.getInintalProps = store => {
    return store.dispatch(testAsync([1, 2, 3, 45, 6]))
    // console.log(store.dispatch, '==========================')
}

export default home