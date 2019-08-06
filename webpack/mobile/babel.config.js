const presets = [
    "@babel/env",
    "@babel/preset-react"
];

const plugins = [
    '@babel/plugin-proposal-class-properties',
    ["import", { libraryName: "antd-mobile", style: "css" }], // `style: true` 会加载 less 文件
];

module.exports = { presets, plugins };