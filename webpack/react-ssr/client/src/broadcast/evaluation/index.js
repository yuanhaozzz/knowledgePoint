import React, { Component, Fragment } from 'react';

import Student from '../../../components/page/broadcast/evaluation/Student';
import Teacher from '../../../components/page/broadcast/evaluation/Teacher';

class evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platform: null
        };
    }

    componentDidMount () {
        this.setState({
            platform: window.WCRClassRoom.getClientType() || 'teacher'
        });
    }



    isTeacher = e => {
        if (this.state.platform === 'teacher') {
            return <Teacher></Teacher>;
        }
        return <Student></Student>;
    }

    render () {

        return (
            <Fragment>
                {/* 评价组件 */}
                {
                    this.state.platform && this.isTeacher()
                }
            </Fragment>
        );
    }
}

export default evaluation;