// let prefix = process.env.NODE_ENV === 'production' ? '' : 'alpha';
let prefix = 'alpha';
let BASE_API = 'alpha';
switch (prefix) {
    case 'dev':
        BASE_API = 'http://dev-api-mp.szy.net/proxy/mallAdmin';
        break;
    case 'alpha':
        BASE_API = 'http://dev.beiwaiguoji.com/api';
        break;
    case 'rc':
        BASE_API = 'http://rc-api-mp.szy.cn/proxy/mallAdmin';
        break;
    default:
        BASE_API = 'http://api-mp.szy.cn/proxy/mallAdmin';
        break;
}
const _path = path => BASE_API + path;
export {
    _path
};
