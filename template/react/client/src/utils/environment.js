
export default {
    DOMAIN: 'master',
    modifyMapDomain: function(host) {
        // 
        if (global.windows) {

        }
        switch (host) {
            case 'localhost':
                this.DOMAIN = 'rc'
                break;
            default:
                break;
        }


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
