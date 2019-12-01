// 获取url参数
export const queryUrlParams = url => {
    let value = {};
    if (!location.search.includes('?')) {
        return value;
    }
    let search = location.search.split('?')[1];
    let splitSearch = search.split('&');
    splitSearch.forEach(item => {
        let splitItem = item.split('=');
        value[splitItem[0]] = splitItem[1];
    });
    return value;
};