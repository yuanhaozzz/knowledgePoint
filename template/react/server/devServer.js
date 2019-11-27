const webpack = require("webpack");
const clientConfig = require("../build/client/webpack.dev.config");
const MFS = require("memory-fs");
const serverConfig = require("../build/server/webpack.prod.config");

module.exports = function setupDevServer (app, callback) {
    let serverEntry;
    let template;
    const update = () => {
        if (serverEntry && template) {
            callback(serverEntry, template);
        }
    }

    const readFile = (fs, fileName) => {
        return fs.readFileSync(path.join(clientConfig.output.path, fileName), "utf-8");
    }

    // 客户端打包
    const clientCompiler = webpack(clientConfig);
    const devMiddleware = require("webpack-dev-middleware")(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        noInfo: true
    });
    // 使用webpack-dev-middleware中间件服务webpack打包后的资源文件
    app.use(devMiddleware);

    clientCompiler.plugin("done", stats => {
        const info = stats.toJson();
        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }

        if (stats.hasErrors()) {
            console.error(info.errors);
            return;
        }
        // 从webpack-dev-middleware中间件存储的内存中读取打包后的inddex.html文件模板
        template = readFile(devMiddleware.fileSystem, "template.html");
        update();
    });
    // 热更新中间件
    app.use(require("webpack-hot-middleware")(clientCompiler));

    // 监视服务端打包入口文件，有更改就更新
    const serverCompiler = webpack(serverConfig);
    // 使用内存文件系统
    const mfs = new MFS();
    console.log(mfs, 'sssssssssssssssssssssssssss')

    serverCompiler.outputFileSystem = mfs;
    serverCompiler.watch({}, (err, stats) => {

        const info = stats.toJson();
        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }

        if (stats.hasErrors()) {
            console.error(info.errors);
            return;
        }

        // 读取打包后的内容并编译模块
        const bundle = readFile(mfs, "server.js");
        const m = new module.constructor();
        m._compile(bundle, "server.js");
        serverEntry = m.exports;
        update();
    });
}