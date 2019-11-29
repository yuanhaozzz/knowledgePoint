
export default {
    DOMAIN: 'master',
    modifyMapDomain: function (host) {
        // 
        if (global.window) {
            host = location.host
        }
        switch (host) {
            case 'localhost':
                this.DOMAIN = 'rc'
                break;
            case '172.17.70.101':
                this.DOMAIN = 'rc'
                break;
            case 'preonlineh5.beiwaiguoji.com':
                this.DOMAIN = 'rc'
                break;
            case 'h5.beiwaiguoji.com':
                this.DOMAIN = 'master'
                break;
            default:
                this.DOMAIN = 'master'
                break;
        }
        return this.DOMAIN
    }
}

// class Environment {
//     constructor(options) {
//         let {domain} = options
//         this.domain = domain
//         this.environment = this.isNoEnvironment()

//     }

//     isNoEnvironment() {
//         let environment = 'node'
//         if (global.window === 'window') {
//             environment = 'window'
//         }
//         return environment
//     }
// }
