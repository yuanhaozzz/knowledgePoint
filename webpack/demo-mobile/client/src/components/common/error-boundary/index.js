import React from 'react'
import Error from '@/components/common/error'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // 你同样可以将错误日志上报给服务器
      console.log(error, info)
    }
  
    render() {
      if (this.state.hasError) {
        // 你可以自定义降级后的 UI 并渲染
        return <Error />;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary