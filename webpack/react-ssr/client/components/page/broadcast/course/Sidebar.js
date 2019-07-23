
import React, { Component } from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import { showDialog } from '../../../../redux/actions';
import { connect } from 'react-redux';

import { getPlatform, arrayFindTo } from '../../../../utils/common';
import './Sidebar.less';
class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            platform: '',
        };
    }

    componentDidMount () {
        this.setState({
            platform: getPlatform()
        });
    }

    handleSignOut = () => {
        window.WCRClassRoom.setUser('');
        Router.push('/broadcast/login');
    }

    handleSwitchStudent = () => {
        this.props.showDialog({ status: true });
    }

    handleAvatar = () => {

    }

    /**
     * 处理性别   // 1 男 2女
     */
    handleGender = (findSelect) => {
        if (findSelect.gender === 1) {
            return 'http://snsimg.ztjystore.cn/1562303034TyAFquWFiu';
        } else if (findSelect.gender === 2) {
            return 'http://snsimg.ztjystore.cn/ztnew/ad/img/2019/07/05/1562291591660101.jpg?imageView2/2/w/720';
        }
        return 'http://snsimg.ztjystore.cn/article/2019/07/05/1562281563183957.jpg?imageView2/2/w/720';
    }

    render () {
        let findSelect = arrayFindTo(this.props.studentInfo, 'select', true);

        return (
            <aside className='sidebar-container'>
                <div className='sidebar-avatar' style={{ 'background': `url(${this.handleGender(findSelect)}) no-repeat` }}>
                </div>
                <div className='sidebar-name'>
                    {findSelect.userName}
                </div>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Icon type='calendar' />
                        <div className='nav-item-title'>课程表</div>
                    </li>
                    {
                        this.state.platform === 'student' && <li className='nav-item' onClick={this.handleSwitchStudent}>
                            <Icon type='team' />
                            <div className='nav-item-title'>切换学生</div>
                        </li>
                    }
                    <li className='nav-item' onClick={this.handleSignOut}>
                        <Icon type='logout' />
                        <div className='nav-item-title'>退出登录</div>
                    </li>
                </ul>

            </aside>
        );
    }

}
Sidebar.propTypes = {
    // eslint-disable-next-line react/require-default-props
    userInfo: PropTypes.object.isRequired
};

Sidebar.defaultProps = {
    userInfo: {}
};

let mapStateToProps = state => {
    let { studentInfo } = state.course;
    return {
        studentInfo
    };
};

export default connect(
    mapStateToProps,
    { showDialog }
)(Sidebar);