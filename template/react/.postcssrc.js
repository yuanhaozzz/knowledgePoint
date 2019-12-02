module.exports = {
    loader: 'postcss-loader',
    "plugins": {
        'postcss-preset-env': {},
        // "postcss-import": {}, "postcss-url": {},
        // "postcss-aspect-ratio-mini": {},
        // "postcss-write-svg": { utf8: false },
        // "postcss-cssnext": {},
        "postcss-px-to-viewport": {
            viewportWidth: 750, // (Number) The width of the viewport. 
            viewportHeight: 1334, // (Number) The height of the viewport. 
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
            viewportUnit: 'vw', // (String) Expected units.
            propList: ['*', '!font-size'],
            selectorBlackList: ['.ignore', '.hairlines', 'am', 'font-size'], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
            // 媒体查询是否转换
            mediaQuery: true // (Boolean) Allow px to be converted in media queries. }
        },
        // "cssnano": { preset: "advanced", autoprefixer: false, "postcss-zindex": false }
    }
}