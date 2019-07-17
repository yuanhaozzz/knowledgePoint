import Routes from './client/route'
import { renderToString } from 'react-dom/server';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom';
import React from 'react'
export const render = (req) => {
    //构建服务端的路由
    console.log(Routes, '----------------')
    const content = renderToString(
        <StaticRouter location={req.path} >
            <Routes></Routes>
        </StaticRouter>
    );
    return content
}