// eslint-disable-next-line no-unused-vars
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Message } from 'antd';

import { format, arrayFindTo } from '../../../../utils/common';
import { CourseApi } from '../../../../api/index';
import './CourseList.less';

function CourseHeader () {
    return (
        <Fragment>
            <div className='course-header flex-center'>
                我的课程
            </div>
        </Fragment>
    );
}

function ListItem (props) {
    let { courseData = {}, userInfo, clearInterval } = props;
    console.log(courseData, '2222222222222222222-');
    /**
     * 返回教室类型
     * @param {number | string} scenario 区分教室类型 0 1v1  7 小班课  2 大班课
     */
    function handleScenario (scenario) {
        switch (scenario) {
            case 1:
                return '一对一';
            case 2:
                return '小班课';
            case 3:
                return '大班课';
            case 4:
                return '广播课';
        }
    }

    /**
     * 映射表
     * @param {number} status	
     * @param {string} type
     */
    function handleCourseBadge (status, type) {
        let defaultData = {
            // 直播间状态1 未开课 2 开课中 3 已结课 4 无效 5 已失效
            text: {
                '1': '待上课',
                '2': '开课中',
                '3': '已下课',
                '4': '无效',
                '5': '已失效',
            },
            color: {
                '3': '#e2e2e2',
                '3': '#e2e2e2',
                '5': '#e2e2e2',
                '1': '#a6d4f5',
                '2': '#a6d4f5'
            },
            button: {
                '1': '进入教室',
                '2': '进入教室',
                '3': '查看回放',
                '4': '无效',
                '5': '已失效',
            },
            // 设置班级映射关系   直播间类型    1 1v1，2 小班课，3 大班课，4 广播课
            type: {
                1: '0',
                2: '7',
                3: '2',
            },
            // 直播间状态1 未开课 2 开课中 3 已结课 4 无效 5 已失效
            courseStatus: {
                1: 1,
                2: 2,
                3: 3,
                4: -1,
                5: 4

            }
        };
        return defaultData[type][status];
    }
    /**
     * 点击进入教室 or 查看回放  
     * 直播间状态 1 未开课 2 开课中 3 已结课 4 无效 5 已失效
     * @param {*} item 当前课次集合
     */
    function handleEntryClass (item) {
        // 1 未开课 2 开课中 3 已结课 4 无效 5 已失效
        if (item.status === 1 || item.status === 2 || item.status === 3) {
            let params = {
                institutionId: 1014,
                id: item.id,
                title: item.title,
                scenario: handleCourseBadge(item.classType, 'type'),
                startTime: item.startTime,
                endTime: item.endTime,
                status: handleCourseBadge(item.status, 'courseStatus'),
                // status: 1,
                teacher_name: item.teacher.userName,
                teacher_id: item.teacher.id,
                /** 进入教室之后默认打开的课件地址
                 *  老师端必须配置，为进教室后默认打开的课件
                    学生端可以通过配置此参数，在开始上课前打开一个log页或欢迎页之类的
                 *  */
                lesson_slide_url: item.broadcastingInfo.lessonSlideUrl,
                // 课件备用地址
                lesson_slide_backup_url: item.broadcastingInfo.lessonSlideBackupUrl,

            };

            // 当前是否已上过课 二次进入
            if (item.actualStartTime) {
                params.actualStartTime = item.actualStartTime;
            }

            // 大班课班型特有字段，其它班型不传此参数
            if (item.classType === 3) {
                // 是否连麦
                params.needLianMai = 1;
                params.record_mode = 4;
            }

            // 小班课传递 student字段
            if (item.classType === 2) {
                params.students = [];
                item.broadcastingInfo.students.forEach(students => {
                    params.students.push({
                        id: students.id,
                        name: students.userName,
                        avatar: students.avatar,
                    });
                });
            }
            // 用户信息
            let userInfo = JSON.parse(localStorage.getItem('userInfo'));
            let userInfoParam = {
                token: userInfo.loginToken
            };
            if (userInfo.subUserInfoVoList.length > 0) {
                userInfoParam.subUserId = arrayFindTo(userInfo.subUserInfoVoList, 'select', true).userId;
            } else {
                userInfoParam.subUserId = userInfo.userId;
            }
            console.log(JSON.stringify(params), 'aaaaa');
            // 进入教室  
            WCRClassRoom.joinClassRoom(JSON.stringify(params), (result) => {
                // 回调函数
                afterJoinClassroomCallback(result, item, userInfoParam);
            });
        } else {
            Message.warning(`该课程${'已失效'}`);
        }
    }

    /**
     * 点击开始上课时间回调客户端
     * @param {object} options
     * options.status 调用自己服务端接口是否成功
     * options.lesson 课程id
     * options.actual_time 第一次上课时间
     * options.server_time 每次服务器响应时间
     * notify  调用客户端对应方法     startClass 点击上课    endClass  结束上课
     */
    function handleClientCallback (options = {}) {
        let { status, lesson, actual_time, server_time, notify } = options;
        //以下是模拟commonNotifyCallback回调

        let params = {
            notify,
            body: {
                status
            }
        };

        // 点击上课按钮回调
        if (notify === 'startClass') {
            params["body"]['data'] = {
                //server_time - actual_time用来计算展示在进入教室后开始已经上课时长。
                lesson,
                actual_time,
                server_time
            };
        }

        // 点击下课按钮回调
        if (notify === 'endClass') {
            params["body"]['data'] = {
                lesson
            };
        }
        // 统一调用
        window.WCRClassRoom.commonNotifyCallback(0, params);

    }

    /**
     * 客户端回调js
     * @param {*} content.notify    客户端回调通知类型  
     * @param {*} content.body      客户端回调参数
     */
    function afterJoinClassroomCallback (content, course, userInfoParam) {
        alert(content["notify"]);
        if (content["notify"] === "startClass") {
            window.WCRClassRoom.web_log(JSON.stringify(content));
            // 清除定时器
            console.log('点击上课按钮');
            let params = {
                token: userInfoParam.token,
                subUserId: userInfoParam.subUserId,
                notify: 'startClass',
                data: JSON.stringify(content['body'])
            };
            CourseApi.sendStudioCallback('calendar', params).then(res => {
                handleClientCallback({
                    status: 1,
                    lesson: course.id,
                    actual_time: (course.actualStartTime ? format(course.actualStartTime, 'yyyy-MM-dd hh:mm:ss') : format(res.systemDate, 'yyyy-MM-dd hh:mm:ss')),
                    server_time: format(res.systemDate, 'yyyy-MM-dd hh:mm:ss'),
                    notify: 'startClass'
                });
                console.log({
                    status: 1,
                    lesson: course.id,
                    actual_time: (course.actualStartTime ? format(course.actualStartTime, 'yyyy-MM-dd hh:mm:ss') : format(res.systemDate, 'yyyy-MM-dd hh:mm:ss')),
                    server_time: format(res.systemDate, 'yyyy-MM-dd hh:mm:ss'),
                    notify: 'startClass',
                    time: course.actualStartTime
                }, '--------');
            }).catch(err => {
                handleClientCallback({
                    status: 2,
                    lesson: course.id,
                    actual_time: (course.actualStartTime ? format(course.actualStartTime, 'yyyy-MM-dd hh:mm:ss') : format(res.systemDate, 'yyyy-MM-dd hh:mm:ss')),
                    server_time: format(res.systemDate, 'yyyy-MM-dd hh:mm:ss'),
                    notify: 'startClass'
                });
            });
        } else if (content["notify"] === "endClass") {
            WCRClassRoom.web_log(JSON.stringify(content));
            console.log('点击下课按钮');
            let params = {
                token: userInfoParam.token,
                subUserId: userInfoParam.subUserId,
                notify: 'endClass',
                data: JSON.stringify(content['body'])
            };
            CourseApi.sendStudioCallback('calendar', params).then(res => {
                handleClientCallback({
                    status: 1,
                    lesson: course.id,
                    notify: 'endClass'
                });
            }).catch(err => {
                handleClientCallback({
                    status: 2,
                    lesson: course.id,
                    notify: 'endClass'
                });
            });
        } else if (content["notify"] === "enterClassRoom") {
            // clearInterval();
            console.log('进入教室');
            //进入教室的回调，课表页收到此回调后，可以将类似loading的过程停止
            WCRClassRoom.web_log(JSON.stringify(content));
            //content 的定义为：
            /*{
              "notify": "enterClassRoom",
              "body": {
                  "room_id": "12345 ",
                  "userid": "20160401"
               }
            }*/
        } else if (content["notify"] === "leaveClassRoom") {
            WCRClassRoom.web_log(JSON.stringify(content));
            window.webAdapter.reload();
            console.log('离开教室');
        } else if (content["notify"] === "rewardinfo") {
            // 奖励
        }
    }

    if (Object.keys(courseData).length < 1) {
        return (
            <Fragment>
                <div className='no-data'>暂无课程</div>
            </Fragment>
        );
    }
    return (
        <ul className='list-item hide-scroll'>
            {
                courseData.courseList.map(item => (
                    <li key={item.id}>
                        <p className='list-item-title'>{item.title}</p>
                        <p className='list-item-type'>{handleScenario(item.classType)}&nbsp;&nbsp;{format(+new Date(item.startTime.replace(/-/g, '/')), 'hh:mm')}-{format(+new Date(item.endTime.replace(/-/g, '/')), 'hh:mm')}</p>
                        <p className='list-item-name'>{item.teacher.userName}</p>
                        <div className='list-item-status' style={{ backgroundColor: handleCourseBadge(item.status, 'color') }}>{handleCourseBadge(item.status, 'text')}</div>
                        <dir className='list-item-button'>
                            <button onClick={() => handleEntryClass(item)}>{handleCourseBadge(item.status, 'button')}</button>
                        </dir>
                    </li>
                ))
            }
        </ul>
    );
}

class CourseList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.courseData, '-----------------asd');
    }
    render () {
        let { courseData, userInfo, clearInterval } = this.props;
        return (
            <Fragment>
                <CourseHeader userInfo={userInfo}></CourseHeader>
                <ListItem userInfo={userInfo} clearInterval={clearInterval} courseData={courseData}></ListItem>
            </Fragment>
        );
    }
}

let mapStateToProps = state => {
    let { courseData } = state.course;

    return {
        courseData
    };
};

export default connect(
    mapStateToProps,
    null
)(CourseList);