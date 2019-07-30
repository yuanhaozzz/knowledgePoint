const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
        }
    ],
    "@babel/preset-react"
];

const plugins = [
    '@babel/plugin-proposal-class-properties',
    ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
]

module.exports = { presets, plugins };