import React, { Component, Fragment } from 'react'
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Routes from '../../../router'
let { routes } = Routes

// 只会匹配一个存在的路由
class EntryRouterAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        let { pathname } = location
        console.log(routes)
        let hasRouter = routes.find(item => item.path === pathname)
        // 未定义路由
        if (!hasRouter) {
            return (
                <Redirect to="/notfound"></Redirect>
            )
        }
        // 待写入登录逻辑
        // if () {

        // }
        return (
            <Fragment>
                {
                    routes.map(item => {
                        return (
                            <Route path={item.path} exact={item.exact} key={item.path}>
                                {/* <Home></Home> */}
                                <item.component></item.component>
                            </Route>
                        )
                    })
                }
            </Fragment>
        );
    }
}

export default EntryRouterAuth;