
import React, { Component } from 'react'
import ContentLoader, { Facebook } from 'react-content-loader'
import { test, asyncTest } from '@/redux/actions'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: null
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                listData: [1, 2]
            })
        }, 1000);
    }

    handleJumpTo = () => {
        this.props.history.push('/login')
    }

    handleModify = () => {
        this.props.asyncTest()
    }

    render () {
        let { listData } = this.state
        if (!listData) {
            return (
                <div>
                    < Facebook />
                    1
                    <ContentLoader>
                        {/* Only SVG shapes */}
                        <rect x="80" y="40" rx="3" ry="3" width="250" height="250" />
                        <rect x="10" y="40" rx="3" ry="3" width="30" height="30" />
                        <rect x="0" y="0" rx="30" ry="30" width="30" height="30" />
                    </ContentLoader>
                </div>
            )

        }
        return (
            <div>
                Home
                <button onClick={this.handleJumpTo}>跳转</button>
                <button onClick={this.handleModify}>修改</button>

            </div>
        )
    }
}

export default connect(
    null,
    { asyncTest }
)(Home)