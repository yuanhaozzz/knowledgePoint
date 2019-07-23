import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { format, arrayFind, arrayFindTo } from '../../../utils/common';
import { sendCourseDetail, setStudent, awaitCourseList, setUserInfo } from '../../../redux/actions';
import SmallCaleandar from '../../../components/page/broadcast/course/SmallCaleandar';
import Sidebar from '../../../components/page/broadcast/course/Sidebar';
import Dialog from '../../../components/page/broadcast/course/Dialog';
import CourseList from '../../../components/page/broadcast/course/CourseList';
import { CourseApi } from '../../../api/index';
import './course.less';
/**
 * 计算开始年月日  和 结束年月日
 * @param {*} type 需要开始时间 还是结束时间
 */
function computedDate (date, type) {
    let nowDate = new Date(date);
    let month = nowDate.getMonth() + 1;
    let year = nowDate.getFullYear();
    let day = 20;
    if (type === 'startDate') {
        --month;
        if (month === 0) {
            month = 12;
            --year;
        }
    } else {
        ++month;
        day = 10;
        if (month === 13) {
            month = 1;
            ++year;
        }
    }
    return `${year}-${month < 10 ? '0' + month : month}-${day}`;
}


class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseData: [],
            currentDate: new Date(),
            interval: null,
            yearMonth: format(+new Date(), 'yyyy-MM'),
            changeDate: format(+new Date(), 'yyyy-MM-dd'),
            studentId: ''
        };
        // 用户个人信息 头像 名称展示
        if (this.props.userInfo.subUserInfoVoList.length > 0) {
            this.props.setStudent({ studentInfo: this.props.userInfo.subUserInfoVoList });
        } else {
            this.props.setStudent({ studentInfo: [this.props.userInfo] });
        }
    }

    componentWillMount () {
        if (!this.props.courseListStore) {
            this.clientRequest();
            this.setState({
                courseData: this.props.courseListStore
            });
        }
    }

    componentDidMount () {
        console.log(this.props.courseListStore);
        console.log(this.props.userInfo, '2');
        window.resizeTo(1080, 650);
        this.checkTodayCourse(+new Date(this.state.currentDate));
        this.setState({
            // 刷新接口调通后 使用setTimeout
            // interval: setTimeout(() => {
            //     window.webAdapter.reload();
            // }, 60000)
        });
    }

    clientRequest = () => {
        let { userInfo } = this.props;
        let params = {
            token: userInfo.loginToken,
            startDate: computedDate(new Date(), 'startDate'),
            endDate: computedDate(new Date(), 'endDate'),
        };
        if (userInfo.subUserInfoVoList.length > 0) {
            params.subUserId = arrayFindTo(userInfo.subUserInfoVoList, 'select', true).userId;
        } else {
            params.subUserId = userInfo.userId;
        }
        this.props.awaitCourseList(params);
    }

    // 清除自动请求定时器
    clearInterval = e => {
        this.setState(state => {
            clearTimeout(state.interval);
        });
    }

    /**
     * 选择日期时触发
     * @param {string} date  拼接的年月
     */
    changeDate = date => {
        let changeDate = `${date.year()}-${(date.month() + 1) < 10 ? '0' + (date.month() + 1) : date.month() + 1}-${date.date() < 10 ? '0' + date.date() : date.date()}`;
        let yearMonth = `${date.year()}-${(date.month() + 1) < 10 ? '0' + (date.month() + 1) : date.month() + 1}`;
        this.setState((state) => {
            state.currentDate = yearMonth;
            state.yearMonth = yearMonth;
            state.changeDate = changeDate;
            if (this.props.userInfo.subUserInfoVoList.length > 0) {
                this.getCourseList(this.state.studentId || arrayFindTo(this.props.userInfo.subUserInfoVoList, 'select', true).userId);
            } else {
                this.getCourseList(this.props.userInfo.userId);
            }
        });
    }

    /**
    * 获取课程列表
    */
    getCourseList = (userId) => {
        let params = {
            token: this.props.userInfo.loginToken,
            subUserId: userId,
            startDate: computedDate(this.state.yearMonth, 'startDate'),
            endDate: computedDate(this.state.yearMonth, 'endDate')
        };
        if (this.props.userInfo.subUserInfoVoList.length > 0) {
            params.subUserId = userId;
        }
        CourseApi.getList('calendar', params).then(res => {
            this.setState({
                courseData: res.calendarList
            });
            this.checkTodayCourse(+new Date(this.state.changeDate));
        });
    }

    /**
    * dialog 组件触发
    * 
    */
    handleDialogSwitchStudent = userId => {
        this.setState({
            studentId: userId
        });
        this.getCourseList(userId);
    }

    /**
    * 检查当前日期是否有课
    * @param {number} nowDate 时间戳
    */
    checkTodayCourse = (nowDate) => {
        let today = format(nowDate, 'yyyy-MM-dd');
        console.log(1);
        this.props.sendCourseDetail({
            courseData: (arrayFind(this.state.courseData, 'date', today) || {})
        });

    }

    /**
     * 显示课程
     */
    showLesson = () => {
        let { courseListStore } = this.props;
        let info = {
            lesson: 0,
            lessonLength: 0
        };
        if (Object.keys(courseListStore).length < 1) {
            return info;
        }
        info.lesson = courseListStore.courseList.length;
        info.lessonLength = courseListStore.courseList.filter(item => (item.status !== 1 && item.status !== 2)).length;
        return info;
    }

    render () {
        let { userInfo } = this.props;
        return (
            <Fragment>
                <div className='content-layout'>
                    {/* 侧边栏 个人信息 */}
                    <Sidebar userInfo={userInfo}></Sidebar>
                    <div className='content-layout-right flex-center'>
                        <div className='content-layout-right-box'>
                            <div className='content-layout-right-caleandar'>
                                <SmallCaleandar changeDate={this.changeDate} courseData={this.state.courseData}></SmallCaleandar>
                            </div>
                            <div className='content-layout-right-course'>
                                <CourseList clearInterval={this.clearInterval} userInfo={userInfo}></CourseList>
                            </div>
                        </div>
                        <div className='content-layout-right-carryout'>共{this.showLesson().lesson}节课 | 完成{this.showLesson().lessonLength}节</div>
                    </div>
                    {/* <Dialog handleDialogSwitchStudent={this.handleDialogSwitchStudent} userInfo={userInfo}></Dialog> */}
                </div>
            </Fragment>
        );
    }
}

let mapStateToProps = state => {
    let { courseList, courseData } = state.course;
    let { userInfo } = state.login;
    return {
        courseDataStore: courseData,
        courseListStore: courseList,
        userInfo
    };
};


let courseComponent = connect(
    mapStateToProps,
    { sendCourseDetail, setStudent, setUserInfo }
)(Course);

courseComponent.getInintalProps = (store, cookie) => {
    let userInfo = JSON.parse(cookie.userInfo);
    // 写入store
    store.dispatch(setUserInfo({ userInfo }));
    let params = {
        token: userInfo.loginToken,
        startDate: computedDate(new Date(), 'startDate'),
        endDate: computedDate(new Date(), 'endDate'),
    };
    if (userInfo.subUserInfoVoList.length > 0) {
        params.subUserId = arrayFindTo(userInfo.subUserInfoVoList, 'select', true).userId;
    } else {
        params.subUserId = userInfo.userId;
    }
    return store.dispatch(awaitCourseList(params));
};

export default courseComponent;