import React, { Component } from 'react';

import Student from '../../../components/page/broadcast/evaluation/Student';
import Teacher from '../../../components/page/broadcast/evaluation/Teacher';
import Layout from '../../../components/common/Layout';

import { queryUrlValue } from '../../../utils/common';

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
            <Layout>
                {/* 评价组件 */}
                {
                    this.state.platform && this.isTeacher()
                }
            </Layout>
        );
    }
}

export default evaluation;