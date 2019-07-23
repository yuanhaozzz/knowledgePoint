webpackHotUpdate("app",{

/***/ "./client/src/broadcast/course/index.js":
/*!**********************************************!*\
  !*** ./client/src/broadcast/course/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.5.4@@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/_@babel_runtime@7.5.4@@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.4@@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.4@@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/_@babel_runtime@7.5.4@@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/_@babel_runtime@7.5.4@@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/_@babel_runtime@7.5.4@@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.1.0@react-redux/es/index.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/common */ "./client/utils/common.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../redux/actions */ "./client/redux/actions.js");
/* harmony import */ var _components_page_broadcast_course_SmallCaleandar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/page/broadcast/course/SmallCaleandar */ "./client/components/page/broadcast/course/SmallCaleandar.js");
/* harmony import */ var _components_page_broadcast_course_Sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/page/broadcast/course/Sidebar */ "./client/components/page/broadcast/course/Sidebar.js");
/* harmony import */ var _components_page_broadcast_course_Dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/page/broadcast/course/Dialog */ "./client/components/page/broadcast/course/Dialog.js");
/* harmony import */ var _components_page_broadcast_course_CourseList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/page/broadcast/course/CourseList */ "./client/components/page/broadcast/course/CourseList.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../api/index */ "./client/api/index.js");
/* harmony import */ var _course_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./course.less */ "./client/src/broadcast/course/course.less");
/* harmony import */ var _course_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_course_less__WEBPACK_IMPORTED_MODULE_16__);

















/**
 * 计算开始年月日  和 结束年月日
 * @param {*} type 需要开始时间 还是结束时间
 */

function computedDate(date, type) {
  var nowDate = new Date(date);
  var month = nowDate.getMonth() + 1;
  var year = nowDate.getFullYear();
  var day = 20;

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

  return "".concat(year, "-").concat(month < 10 ? '0' + month : month, "-").concat(day);
}

var Course =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Course, _Component);

  function Course(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Course);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Course).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "clientRequest", function () {
      var userInfo = _this.props.userInfo;
      var params = {
        token: userInfo.loginToken,
        startDate: computedDate(new Date(), 'startDate'),
        endDate: computedDate(new Date(), 'endDate')
      };

      if (userInfo.subUserInfoVoList.length > 0) {
        params.subUserId = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["arrayFindTo"])(userInfo.subUserInfoVoList, 'select', true).userId;
      } else {
        params.subUserId = userInfo.userId;
      }

      _this.props.awaitCourseList(params);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "clearInterval", function (e) {
      _this.setState(function (state) {
        clearTimeout(state.interval);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "changeDate", function (date) {
      var changeDate = "".concat(date.year(), "-").concat(date.month() + 1 < 10 ? '0' + (date.month() + 1) : date.month() + 1, "-").concat(date.date() < 10 ? '0' + date.date() : date.date());
      var yearMonth = "".concat(date.year(), "-").concat(date.month() + 1 < 10 ? '0' + (date.month() + 1) : date.month() + 1);

      _this.setState(function (state) {
        state.currentDate = yearMonth;
        state.yearMonth = yearMonth;
        state.changeDate = changeDate;

        if (_this.props.userInfo.subUserInfoVoList.length > 0) {
          _this.getCourseList(_this.state.studentId || Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["arrayFindTo"])(_this.props.userInfo.subUserInfoVoList, 'select', true).userId);
        } else {
          _this.getCourseList(_this.props.userInfo.userId);
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getCourseList", function (userId) {
      var params = {
        token: _this.props.userInfo.loginToken,
        subUserId: userId,
        startDate: computedDate(_this.state.yearMonth, 'startDate'),
        endDate: computedDate(_this.state.yearMonth, 'endDate')
      };

      if (_this.props.userInfo.subUserInfoVoList.length > 0) {
        params.subUserId = userId;
      }

      _api_index__WEBPACK_IMPORTED_MODULE_15__["CourseApi"].getList('calendar', params).then(function (res) {
        _this.setState({
          courseData: res.calendarList
        });

        _this.checkTodayCourse(+new Date(_this.state.changeDate));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleDialogSwitchStudent", function (userId) {
      _this.setState({
        studentId: userId
      });

      _this.getCourseList(userId);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "checkTodayCourse", function (nowDate) {
      var today = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["format"])(nowDate, 'yyyy-MM-dd');
      console.log(1);

      _this.props.sendCourseDetail({
        courseData: Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["arrayFind"])(_this.state.courseData, 'date', today) || {}
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "showLesson", function () {
      var courseListStore = _this.props.courseListStore;
      var info = {
        lesson: 0,
        lessonLength: 0
      };

      if (Object.keys(courseListStore).length < 1) {
        return info;
      }

      info.lesson = courseListStore.courseList.length;
      info.lessonLength = courseListStore.courseList.filter(function (item) {
        return item.status !== 1 && item.status !== 2;
      }).length;
      return info;
    });

    _this.state = {
      courseData: [],
      currentDate: new Date(),
      interval: null,
      yearMonth: Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["format"])(+new Date(), 'yyyy-MM'),
      changeDate: Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["format"])(+new Date(), 'yyyy-MM-dd'),
      studentId: ''
    }; // 用户个人信息 头像 名称展示

    if (_this.props.userInfo.subUserInfoVoList.length > 0) {
      _this.props.setStudent({
        studentInfo: _this.props.userInfo.subUserInfoVoList
      });
    } else {
      _this.props.setStudent({
        studentInfo: [_this.props.userInfo]
      });
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Course, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.props.courseListStore) {
        this.clientRequest();
        this.setState({
          courseData: this.props.courseListStore
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.courseListStore);
      console.log(this.props.userInfo, '2');
      window.resizeTo(1080, 650);
      this.checkTodayCourse(+new Date(this.state.currentDate));
      this.setState({// 刷新接口调通后 使用setTimeout
        // interval: setTimeout(() => {
        //     window.webAdapter.reload();
        // }, 60000)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var userInfo = this.props.userInfo;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-layout"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_page_broadcast_course_Sidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        userInfo: userInfo
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-layout-right flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-layout-right-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-layout-right-caleandar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_page_broadcast_course_SmallCaleandar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        changeDate: this.changeDate,
        courseData: this.state.courseData
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-layout-right-course"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_page_broadcast_course_CourseList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        clearInterval: this.clearInterval,
        userInfo: userInfo
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-layout-right-carryout"
      }, "\u5171", this.showLesson().lesson, "\u8282\u8BFE | \u5B8C\u6210", this.showLesson().lessonLength, "\u8282"))));
    }
  }]);

  return Course;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var _state$course = state.course,
      courseList = _state$course.courseList,
      courseData = _state$course.courseData;
  var userInfo = state.login.userInfo;
  return {
    courseDataStore: courseData,
    courseListStore: courseList,
    userInfo: userInfo
  };
};

var courseComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  sendCourseDetail: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["sendCourseDetail"],
  setStudent: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["setStudent"],
  setUserInfo: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["setUserInfo"]
})(Course);

courseComponent.getInintalProps = function (store, cookie) {
  var userInfo = JSON.parse(cookie.userInfo); // 写入store

  store.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["setUserInfo"])({
    userInfo: userInfo
  }));
  var params = {
    token: userInfo.loginToken,
    startDate: computedDate(new Date(), 'startDate'),
    endDate: computedDate(new Date(), 'endDate')
  };

  if (userInfo.subUserInfoVoList.length > 0) {
    params.subUserId = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["arrayFindTo"])(userInfo.subUserInfoVoList, 'select', true).userId;
  } else {
    params.subUserId = userInfo.userId;
  }

  return store.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["awaitCourseList"])(params));
};

/* harmony default export */ __webpack_exports__["default"] = (courseComponent);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Jyb2FkY2FzdC9jb3Vyc2UvaW5kZXguanMiXSwibmFtZXMiOlsiY29tcHV0ZWREYXRlIiwiZGF0ZSIsInR5cGUiLCJub3dEYXRlIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJkYXkiLCJDb3Vyc2UiLCJwcm9wcyIsInVzZXJJbmZvIiwicGFyYW1zIiwidG9rZW4iLCJsb2dpblRva2VuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN1YlVzZXJJbmZvVm9MaXN0IiwibGVuZ3RoIiwic3ViVXNlcklkIiwiYXJyYXlGaW5kVG8iLCJ1c2VySWQiLCJhd2FpdENvdXJzZUxpc3QiLCJlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImNsZWFyVGltZW91dCIsImludGVydmFsIiwiY2hhbmdlRGF0ZSIsInllYXJNb250aCIsImN1cnJlbnREYXRlIiwiZ2V0Q291cnNlTGlzdCIsInN0dWRlbnRJZCIsIkNvdXJzZUFwaSIsImdldExpc3QiLCJ0aGVuIiwicmVzIiwiY291cnNlRGF0YSIsImNhbGVuZGFyTGlzdCIsImNoZWNrVG9kYXlDb3Vyc2UiLCJ0b2RheSIsImZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kQ291cnNlRGV0YWlsIiwiYXJyYXlGaW5kIiwiY291cnNlTGlzdFN0b3JlIiwiaW5mbyIsImxlc3NvbiIsImxlc3Nvbkxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJjb3Vyc2VMaXN0IiwiZmlsdGVyIiwiaXRlbSIsInN0YXR1cyIsInNldFN0dWRlbnQiLCJzdHVkZW50SW5mbyIsImNsaWVudFJlcXVlc3QiLCJ3aW5kb3ciLCJyZXNpemVUbyIsImNsZWFySW50ZXJ2YWwiLCJzaG93TGVzc29uIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY291cnNlIiwibG9naW4iLCJjb3Vyc2VEYXRhU3RvcmUiLCJjb3Vyc2VDb21wb25lbnQiLCJjb25uZWN0Iiwic2V0VXNlckluZm8iLCJnZXRJbmludGFsUHJvcHMiLCJzdG9yZSIsImNvb2tpZSIsIkpTT04iLCJwYXJzZSIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUEsU0FBU0EsWUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQy9CLE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVNILElBQVQsQ0FBZDtBQUNBLE1BQUlJLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxRQUFSLEtBQXFCLENBQWpDO0FBQ0EsTUFBSUMsSUFBSSxHQUFHSixPQUFPLENBQUNLLFdBQVIsRUFBWDtBQUNBLE1BQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLE1BQUlQLElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQ3RCLE1BQUVHLEtBQUY7O0FBQ0EsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYkEsV0FBSyxHQUFHLEVBQVI7QUFDQSxRQUFFRSxJQUFGO0FBQ0g7QUFDSixHQU5ELE1BTU87QUFDSCxNQUFFRixLQUFGO0FBQ0FJLE9BQUcsR0FBRyxFQUFOOztBQUNBLFFBQUlKLEtBQUssS0FBSyxFQUFkLEVBQWtCO0FBQ2RBLFdBQUssR0FBRyxDQUFSO0FBQ0EsUUFBRUUsSUFBRjtBQUNIO0FBQ0o7O0FBQ0QsbUJBQVVBLElBQVYsY0FBa0JGLEtBQUssR0FBRyxFQUFSLEdBQWEsTUFBTUEsS0FBbkIsR0FBMkJBLEtBQTdDLGNBQXNESSxHQUF0RDtBQUNIOztJQUdLQyxNOzs7OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsME1BQU1BLEtBQU47O0FBRGUsOExBd0NILFlBQU07QUFBQSxVQUNaQyxRQURZLEdBQ0MsTUFBS0QsS0FETixDQUNaQyxRQURZO0FBRWxCLFVBQUlDLE1BQU0sR0FBRztBQUNUQyxhQUFL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QUVqQixZQUFZLENBQUMsSUFBSUksSUFBSixFQUFELEVBQWEsU0FBYjtBQUhaLEdBQWI7O0FBS0EsTUFBSVEsUUFBUSxDQUFDTSxpQkFBVCxDQUEyQkMsTUFBM0IsR0FBb0MsQ0FBeEMsRUFBMkM7QUFDdkNOLFVBQU0sQ0FBQ08sU0FBUCxHQUFtQkMsaUVBQVcsQ0FBQ1QsUUFBUSxDQUFDTSxpQkFBVixFQUE2QixRQUE3QixFQUF1QyxJQUF2QyxDQUFYLENBQXdESSxNQUEzRTtBQUNILEdBRkQsTUFFTztBQUNIVCxVQUFNLENBQUNPLFNBQVAsR0FBbUJSLFFBQVEsQ0FBQ1UsTUFBNUI7QUFDSDs7QUFDRCxTQUFPbUQsS0FBSyxDQUFDSSxRQUFOLENBQWV0RCx1RUFBZSxDQUFDVixNQUFELENBQTlCLENBQVA7QUFDSCxDQWZEOztBQWlCZXdELDhFQUFmLEUiLCJmaWxlIjoiYXBwLjE0MzFjNjRiMGY1YmJkNmZhODBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IGZvcm1hdCwgYXJyYXlGaW5kLCBhcnJheUZpbmRUbyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IHNlbmRDb3Vyc2VEZXRhaWwsIHNldFN0dWRlbnQsIGF3YWl0Q291cnNlTGlzdCwgc2V0VXNlckluZm8gfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IFNtYWxsQ2FsZWFuZGFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGFnZS9icm9hZGNhc3QvY291cnNlL1NtYWxsQ2FsZWFuZGFyJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlL2Jyb2FkY2FzdC9jb3Vyc2UvU2lkZWJhcic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlL2Jyb2FkY2FzdC9jb3Vyc2UvRGlhbG9nJztcclxuaW1wb3J0IENvdXJzZUxpc3QgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlL2Jyb2FkY2FzdC9jb3Vyc2UvQ291cnNlTGlzdCc7XHJcbmltcG9ydCB7IENvdXJzZUFwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9pbmRleCc7XHJcbmltcG9ydCAnLi9jb3Vyc2UubGVzcyc7XHJcbi8qKlxyXG4gKiDorqHnrpflvIDlp4vlubTmnIjml6UgIOWSjCDnu5PmnZ/lubTmnIjml6VcclxuICogQHBhcmFtIHsqfSB0eXBlIOmcgOimgeW8gOWni+aXtumXtCDov5jmmK/nu5PmnZ/ml7bpl7RcclxuICovXHJcbmZ1bmN0aW9uIGNvbXB1dGVkRGF0ZSAoZGF0ZSwgdHlwZSkge1xyXG4gICAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIGxldCBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgeWVhciA9IG5vd0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxldCBkYXkgPSAyMDtcclxuICAgIGlmICh0eXBlID09PSAnc3RhcnREYXRlJykge1xyXG4gICAgICAgIC0tbW9udGg7XHJcbiAgICAgICAgaWYgKG1vbnRoID09PSAwKSB7XHJcbiAgICAgICAgICAgIG1vbnRoID0gMTI7XHJcbiAgICAgICAgICAgIC0teWVhcjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICsrbW9udGg7XHJcbiAgICAgICAgZGF5ID0gMTA7XHJcbiAgICAgICAgaWYgKG1vbnRoID09PSAxMykge1xyXG4gICAgICAgICAgICBtb250aCA9IDE7XHJcbiAgICAgICAgICAgICsreWVhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtkYXl9YDtcclxufVxyXG5cclxuXHJcbmNsYXNzIENvdXJzZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb3Vyc2VEYXRhOiBbXSxcclxuICAgICAgICAgICAgY3VycmVudERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGludGVydmFsOiBudWxsLFxyXG4gICAgICAgICAgICB5ZWFyTW9udGg6IGZvcm1hdCgrbmV3IERhdGUoKSwgJ3l5eXktTU0nKSxcclxuICAgICAgICAgICAgY2hhbmdlRGF0ZTogZm9ybWF0KCtuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpLFxyXG4gICAgICAgICAgICBzdHVkZW50SWQ6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDnlKjmiLfkuKrkurrkv6Hmga8g5aS05YOPIOWQjeensOWxleekulxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVzZXJJbmZvLnN1YlVzZXJJbmZvVm9MaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRTdHVkZW50KHsgc3R1ZGVudEluZm86IHRoaXMucHJvcHMudXNlckluZm8uc3ViVXNlckluZm9Wb0xpc3QgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRTdHVkZW50KHsgc3R1ZGVudEluZm86IFt0aGlzLnByb3BzLnVzZXJJbmZvXSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY291cnNlTGlzdFN0b3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50UmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvdXJzZURhdGE6IHRoaXMucHJvcHMuY291cnNlTGlzdFN0b3JlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jb3Vyc2VMaXN0U3RvcmUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlckluZm8sICcyJyk7XHJcbiAgICAgICAgd2luZG93LnJlc2l6ZVRvKDEwODAsIDY1MCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1RvZGF5Q291cnNlKCtuZXcgRGF0ZSh0aGlzLnN0YXRlLmN1cnJlbnREYXRlKSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC8vIOWIt+aWsOaOpeWPo+iwg+mAmuWQjiDkvb/nlKhzZXRUaW1lb3V0XHJcbiAgICAgICAgICAgIC8vIGludGVydmFsOiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy53ZWJBZGFwdGVyLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAvLyB9LCA2MDAwMClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGllbnRSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7IHVzZXJJbmZvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRva2VuOiB1c2VySW5mby5sb2dpblRva2VuLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6IGNvbXB1dGVkRGF0ZShuZXcgRGF0ZSgpLCAnc3RhcnREYXRlJyksXHJcbiAgICAgICAgICAgIGVuZERhdGU6IGNvbXB1dGVkRGF0ZShuZXcgRGF0ZSgpLCAnZW5kRGF0ZScpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvLnN1YlVzZXJJbmZvVm9MaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcGFyYW1zLnN1YlVzZXJJZCA9IGFycmF5RmluZFRvKHVzZXJJbmZvLnN1YlVzZXJJbmZvVm9MaXN0LCAnc2VsZWN0JywgdHJ1ZSkudXNlcklkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5zdWJVc2VySWQgPSB1c2VySW5mby51c2VySWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMuYXdhaXRDb3Vyc2VMaXN0KHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5riF6Zmk6Ieq5Yqo6K+35rGC5a6a5pe25ZmoXHJcbiAgICBjbGVhckludGVydmFsID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzdGF0ZS5pbnRlcnZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgInmi6nml6XmnJ/ml7bop6blj5FcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlICDmi7zmjqXnmoTlubTmnIhcclxuICAgICAqL1xyXG4gICAgY2hhbmdlRGF0ZSA9IGRhdGUgPT4ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VEYXRlID0gYCR7ZGF0ZS55ZWFyKCl9LSR7KGRhdGUubW9udGgoKSArIDEpIDwgMTAgPyAnMCcgKyAoZGF0ZS5tb250aCgpICsgMSkgOiBkYXRlLm1vbnRoKCkgKyAxfS0ke2RhdGUuZGF0ZSgpIDwgMTAgPyAnMCcgKyBkYXRlLmRhdGUoKSA6IGRhdGUuZGF0ZSgpfWA7XHJcbiAgICAgICAgbGV0IHllYXJNb250aCA9IGAke2RhdGUueWVhcigpfS0keyhkYXRlLm1vbnRoKCkgKyAxKSA8IDEwID8gJzAnICsgKGRhdGUubW9udGgoKSArIDEpIDogZGF0ZS5tb250aCgpICsgMX1gO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnREYXRlID0geWVhck1vbnRoO1xyXG4gICAgICAgICAgICBzdGF0ZS55ZWFyTW9udGggPSB5ZWFyTW9udGg7XHJcbiAgICAgICAgICAgIHN0YXRlLmNoYW5nZURhdGUgPSBjaGFuZ2VEYXRlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VySW5mby5zdWJVc2VySW5mb1ZvTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvdXJzZUxpc3QodGhpcy5zdGF0ZS5zdHVkZW50SWQgfHwgYXJyYXlGaW5kVG8odGhpcy5wcm9wcy51c2VySW5mby5zdWJVc2VySW5mb1ZvTGlzdCwgJ3NlbGVjdCcsIHRydWUpLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvdXJzZUxpc3QodGhpcy5wcm9wcy51c2VySW5mby51c2VySWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOiOt+WPluivvueoi+WIl+ihqFxyXG4gICAgKi9cclxuICAgIGdldENvdXJzZUxpc3QgPSAodXNlcklkKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdG9rZW46IHRoaXMucHJvcHMudXNlckluZm8ubG9naW5Ub2tlbixcclxuICAgICAgICAgICAgc3ViVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogY29tcHV0ZWREYXRlKHRoaXMuc3RhdGUueWVhck1vbnRoLCAnc3RhcnREYXRlJyksXHJcbiAgICAgICAgICAgIGVuZERhdGU6IGNvbXB1dGVkRGF0ZSh0aGlzLnN0YXRlLnllYXJNb250aCwgJ2VuZERhdGUnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlckluZm8uc3ViVXNlckluZm9Wb0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwYXJhbXMuc3ViVXNlcklkID0gdXNlcklkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb3Vyc2VBcGkuZ2V0TGlzdCgnY2FsZW5kYXInLCBwYXJhbXMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VEYXRhOiByZXMuY2FsZW5kYXJMaXN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVG9kYXlDb3Vyc2UoK25ldyBEYXRlKHRoaXMuc3RhdGUuY2hhbmdlRGF0ZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBkaWFsb2cg57uE5Lu26Kem5Y+RXHJcbiAgICAqIFxyXG4gICAgKi9cclxuICAgIGhhbmRsZURpYWxvZ1N3aXRjaFN0dWRlbnQgPSB1c2VySWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdHVkZW50SWQ6IHVzZXJJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0Q291cnNlTGlzdCh1c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmo4Dmn6XlvZPliY3ml6XmnJ/mmK/lkKbmnInor75cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG5vd0RhdGUg5pe26Ze05oizXHJcbiAgICAqL1xyXG4gICAgY2hlY2tUb2RheUNvdXJzZSA9IChub3dEYXRlKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvZGF5ID0gZm9ybWF0KG5vd0RhdGUsICd5eXl5LU1NLWRkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coMSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZW5kQ291cnNlRGV0YWlsKHtcclxuICAgICAgICAgICAgY291cnNlRGF0YTogKGFycmF5RmluZCh0aGlzLnN0YXRlLmNvdXJzZURhdGEsICdkYXRlJywgdG9kYXkpIHx8IHt9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuivvueoi1xyXG4gICAgICovXHJcbiAgICBzaG93TGVzc29uID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7IGNvdXJzZUxpc3RTdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgICAgbGVzc29uOiAwLFxyXG4gICAgICAgICAgICBsZXNzb25MZW5ndGg6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjb3Vyc2VMaXN0U3RvcmUpLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZm8ubGVzc29uID0gY291cnNlTGlzdFN0b3JlLmNvdXJzZUxpc3QubGVuZ3RoO1xyXG4gICAgICAgIGluZm8ubGVzc29uTGVuZ3RoID0gY291cnNlTGlzdFN0b3JlLmNvdXJzZUxpc3QuZmlsdGVyKGl0ZW0gPT4gKGl0ZW0uc3RhdHVzICE9PSAxICYmIGl0ZW0uc3RhdHVzICE9PSAyKSkubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgbGV0IHsgdXNlckluZm8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtbGF5b3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog5L6n6L655qCPIOS4quS6uuS/oeaBryAqL31cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciB1c2VySW5mbz17dXNlckluZm99PjwvU2lkZWJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1sYXlvdXQtcmlnaHQgZmxleC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1sYXlvdXQtcmlnaHQtYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWxheW91dC1yaWdodC1jYWxlYW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENhbGVhbmRhciBjaGFuZ2VEYXRlPXt0aGlzLmNoYW5nZURhdGV9IGNvdXJzZURhdGE9e3RoaXMuc3RhdGUuY291cnNlRGF0YX0+PC9TbWFsbENhbGVhbmRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtbGF5b3V0LXJpZ2h0LWNvdXJzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdXJzZUxpc3QgY2xlYXJJbnRlcnZhbD17dGhpcy5jbGVhckludGVydmFsfSB1c2VySW5mbz17dXNlckluZm99PjwvQ291cnNlTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtbGF5b3V0LXJpZ2h0LWNhcnJ5b3V0Jz7lhbF7dGhpcy5zaG93TGVzc29uKCkubGVzc29ufeiKguivviB8IOWujOaIkHt0aGlzLnNob3dMZXNzb24oKS5sZXNzb25MZW5ndGh96IqCPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxEaWFsb2cgaGFuZGxlRGlhbG9nU3dpdGNoU3R1ZGVudD17dGhpcy5oYW5kbGVEaWFsb2dTd2l0Y2hTdHVkZW50fSB1c2VySW5mbz17dXNlckluZm99PjwvRGlhbG9nPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgICBsZXQgeyBjb3Vyc2VMaXN0LCBjb3Vyc2VEYXRhIH0gPSBzdGF0ZS5jb3Vyc2U7XHJcbiAgICBsZXQgeyB1c2VySW5mbyB9ID0gc3RhdGUubG9naW47XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdXJzZURhdGFTdG9yZTogY291cnNlRGF0YSxcclxuICAgICAgICBjb3Vyc2VMaXN0U3RvcmU6IGNvdXJzZUxpc3QsXHJcbiAgICAgICAgdXNlckluZm9cclxuICAgIH07XHJcbn07XHJcblxyXG5cclxubGV0IGNvdXJzZUNvbXBvbmVudCA9IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICB7IHNlbmRDb3Vyc2VEZXRhaWwsIHNldFN0dWRlbnQsIHNldFVzZXJJbmZvIH1cclxuKShDb3Vyc2UpO1xyXG5cclxuY291cnNlQ29tcG9uZW50LmdldEluaW50YWxQcm9wcyA9IChzdG9yZSwgY29va2llKSA9PiB7XHJcbiAgICBsZXQgdXNlckluZm8gPSBKU09OLnBhcnNlKGNvb2tpZS51c2VySW5mbyk7XHJcbiAgICAvLyDlhpnlhaVzdG9yZVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0VXNlckluZm8oeyB1c2VySW5mbyB9KSk7XHJcbiAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgIHRva2VuOiB1c2VySW5mby5sb2dpblRva2VuLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogY29tcHV0ZWREYXRlKG5ldyBEYXRlKCksICdzdGFydERhdGUnKSxcclxuICAgICAgICBlbmREYXRlOiBjb21wdXRlZERhdGUobmV3IERhdGUoKSwgJ2VuZERhdGUnKSxcclxuICAgIH07XHJcbiAgICBpZiAodXNlckluZm8uc3ViVXNlckluZm9Wb0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHBhcmFtcy5zdWJVc2VySWQgPSBhcnJheUZpbmRUbyh1c2VySW5mby5zdWJVc2VySW5mb1ZvTGlzdCwgJ3NlbGVjdCcsIHRydWUpLnVzZXJJZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyYW1zLnN1YlVzZXJJZCA9IHVzZXJJbmZvLnVzZXJJZDtcclxuICAgIH1cclxuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhd2FpdENvdXJzZUxpc3QocGFyYW1zKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3Vyc2VDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==