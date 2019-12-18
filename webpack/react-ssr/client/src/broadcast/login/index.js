
import React, { Component, Fragment } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { setUserInfo, setStudent } from '../../../redux/actions';

import { BrowserRouter as Router } from 'react-router-dom';

import { UserApi } from '../../../api/index';
import { setCookie, getPlatform, setUuid } from '../../../utils/common';
import './login.less';


class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            info: {}
        };
    }

    componentDidMount () {
        this.setState({
            info: JSON.parse(localStorage.getItem('info')) || {},
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                this.props.handleSubmit('account', {
                    loginName: value.username,
                    password: value.password
                });
            }
        });
    }
    switchMethod = e => {
        this.props.switchMethod(2);
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className='login-form'>
                <Form.Item>
                    {getFieldDecorator('username', {
                        initialValue: this.state.info.loginName || '',
                        rules: [{ required: true, message: '请输入账号!' }],
                    })(
                        <Input
                            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder='用户名'
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        initialValue: this.state.info.password || '',
                        rules: [{ required: true, message: '请输入密码！' }],
                    })(
                        <Input
                            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type='password'
                            placeholder='密码'
                        />,
                    )}
                </Form.Item>
                <p className='login-form-phone' onClick={this.switchMethod}>手机号登陆？</p>
                <Form.Item>
                    <Button type='primary' block htmlType='submit' loading={this.state.loading} className='login-form-button'>登录</Button>
                </Form.Item>
            </Form>
        );
    }
}

class Phone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            info: {},
            isSend: false,
            number: 60,
            interval: null,
            phone: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                this.props.handleSubmit('phone', {
                    mobile: value.phone,
                    smsCode: value.code,
                });
            }
        });
    }
    switchMethod = e => {
        this.props.switchMethod(1);
    }

    /**
     * 发送验证码
     */
    sendCode = e => {
        // 单个验证
        this.props.form.validateFields(['phone'], err => {
            if (!err) {
                this.setState(state => {
                    return {
                        isSend: true
                    };
                });
                let params = {
                    mobile: this.props.form.getFieldValue('phone'),
                    userSmsType: 0,
                    deviceType: 1,
                    deviceSerialNo: 'pc' + this.props.uuid
                };
                UserApi.sendCode(params).then(res => {
                    this.setState({
                        interval: setInterval(() => {
                            this.setState((state, props) => {
                                return {
                                    number: --state.number
                                };
                            });
                            if (this.state.number === 57) {
                                this.setState(state => {
                                    clearInterval(this.state.interval);
                                    return {
                                        isSend: false,
                                        number: 60
                                    };
                                });
                            }

                        }, 1000)
                    });
                }).catch(err => {
                    this.setState(state => {
                        return {
                            isSend: false
                        };
                    });
                });
            }
        });


    }

    /**
     * 验证手机号码
     */
    validatorPhone = (rule, value, callback) => {
        let reg = /^1[3456789]\d{9}$/;
        if (value.length === 0) {
            callback('请输入手机号码');
        } else if (!reg.test(value)) {
            callback('手机号码输入有误');
        }
        callback();
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        let { isSend, number } = this.state;
        return (
            <Form onSubmit={this.handleSubmit} className='login-form'>
                <Form.Item>
                    {getFieldDecorator('phone', {
                        initialValue: this.state.phone || '',
                        rules: [
                            // { required: true, message: '请输入手机号!' },
                            { validator: (rule, value, callback) => this.validatorPhone(rule, value, callback) }
                        ],
                    })(
                        <Input
                            prefix={<Icon type='phone' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder='手机号'
                        />,
                    )}

                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('code', {
                        rules: [{ required: true, message: '请输入验证码!' }],
                    })(
                        <div className='flex-center phone-box'>
                            <Input
                                placeholder='验证码'
                            /> <Button type='primary' onClick={this.sendCode} disabled={isSend}>
                                {
                                    isSend ? number + 's' : '发送'
                                }
                            </Button>
                        </div>

                    )}
                </Form.Item>
                <p className='login-form-phone' onClick={this.switchMethod}>账号密码登陆？</p>
                <Form.Item>
                    <Button type='primary' block htmlType='submit' loading={this.state.loading} className='login-form-button'>登录</Button>
                </Form.Item>
            </Form>
        );
    }
}
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginType: 1,
            info: {},
            uuid: ''
        };
    }
    componentDidMount () {
        this.setState({
            info: JSON.parse(localStorage.getItem('info')) || {},
            uuid: localStorage.getItem('uuid') ? localStorage.getItem('uuid') : setUuid()
        });
    }

    /**
     * 分为手机号 账号 登录  使用同一个方法
     * @param {string} type   (默认)account   phone
     */
    handleSubmit = (type = 'account', options = {}) => {
        this.props.form.validateFields((err) => {
            if (!err) {
                this.setState({
                    loading: true
                });
                localStorage.setItem('uuid', this.state.uuid);

                let params = {
                    deviceType: 1,
                    deviceSerialNo: 'pc-' + this.state.uuid
                };

                let requestType = UserApi.getUserInfo;
                // 根据登录类型做区分
                if (type === 'account') {
                    params.loginName = options.loginName;
                    params.password = options.password;
                } else {
                    params.mobile = options.mobile;
                    params.smsCode = options.smsCode;
                    requestType = UserApi.getPhoneUserInfo;
                }

                requestType(params).then((res) => {
                    let platform = getPlatform();
                    // 判断当前版本
                    if (res.userMessageVo.userType === 1 && platform === 'student') {
                        message.error('请登录教师端！');
                        this.setState({
                            loading: false
                        });
                        return;
                    }
                    if (res.userMessageVo.userType !== 1 && platform === 'teacher') {
                        message.error('请登录学生端！');
                        this.setState({
                            loading: false
                        });
                        return;
                    }
                    if (res.userMessageVo.userType === 4 && res.userMessageVo.subUserInfoVoList.length === 0) {
                        message.error('您未添加学生');
                        this.setState({
                            loading: false
                        });
                        return;
                    }
                    this.setState({
                        loading: false
                    });
                    // 调用直播云SDK 传入父类信息
                    let userInfo = {};
                    // 如果子类存在 说明是 家长 或者 学生 取子类信息
                    if (res.userMessageVo.subUserInfoVoList.length > 0) {
                        userInfo.id = res.userMessageVo.subUserInfoVoList[0].userId;
                        userInfo.name = res.userMessageVo.subUserInfoVoList[0].userName;
                        userInfo.password = '0';
                        userInfo.token = res.userMessageVo.loginToken;
                        userInfo.avatar = 'http://snsimg.ztjystore.cn/ztnew/ad/img/2019/07/05/1562295571719403.png';
                        userInfo.mobile = res.userMessageVo.subUserInfoVoList[0].mobile || '0';
                        res.userMessageVo.subUserInfoVoList[0].select = true;
                        this.props.setStudent({ studentInfo: res.userMessageVo.subUserInfoVoList[0] });
                    } else {
                        userInfo.id = res.userMessageVo.userId;
                        userInfo.name = res.userMessageVo.userName;
                        userInfo.password = '0';
                        userInfo.token = res.userMessageVo.loginToken;
                        userInfo.avatar = 'http://snsimg.ztjystore.cn/ztnew/ad/img/2019/07/05/1562295571719403.png';
                        userInfo.mobile = res.userMessageVo.mobile || '0';
                        this.props.setStudent({ studentInfo: res.userMessageVo });
                        res.userMessageVo.select = true;
                    }
                    // 1 教师，2 学员， 3 潜客 4 家长
                    let type = {
                        '1': 'teacher',
                        '2': 'student',
                        '3': 'student',
                        '4': 'student',
                    };
                    userInfo['type'] = type[(res.userMessageVo.userType)] || 'student';

                    // 写入store
                    this.props.setUserInfo({ userInfo: res.userMessageVo });
                    //  写入cookie 和 localstorage
                    setCookie('userInfo', encodeURI(JSON.stringify(res.userMessageVo)), 30);
                    localStorage.setItem('userInfo', JSON.stringify(res.userMessageVo));
                    // 记录登录的账号和密码
                    localStorage.setItem('info', JSON.stringify({
                        loginName: options.loginName,
                        password: options.password
                    }));
                    window.WCRClassRoom.setUser(JSON.stringify(userInfo));
                    this.props.history.push('/h5/live/broadcast/course');
                }).catch(err => {
                    this.setState({
                        loading: false
                    });
                });
            }
        });
    };
    /**
     * @param {number}  1切换到账号    2   切换到手机号
     */
    switchMethod = type => {
        this.setState({
            loginType: type
        });
    }

    render () {
        let { loginType } = this.state;
        return (
            <Fragment>
                <div className='login-wrapper'>
                    <Icon type="play-square" />123123
                    <div className='login-wrapper-layout'>
                        奥术大师大所其未完成
                        <div className='login-logo'></div>
                        {
                            loginType === 1 && <Account handleSubmit={this.handleSubmit} switchMethod={this.switchMethod} {...this.props} info={this.state.info} ></Account>
                        }
                        {
                            loginType === 2 && <Phone handleSubmit={this.handleSubmit} uuid={this.state.uuid} switchMethod={this.switchMethod} {...this.props}></Phone>
                        }

                    </div>
                </div>
            </Fragment>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect(
    null,
    { setUserInfo, setStudent }
)(WrappedNormalLoginForm);