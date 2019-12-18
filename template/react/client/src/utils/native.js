class CreateDsbridge {
    constructor() {
        this.dsbridge = require('dsbridge');
    }

    goBackAction (params) {
        try {
            this.dsbridge.call('goBackAction', params || '');
        } catch (error) {
            console.log(error)
        }
    };
    setTest (callback) {
        try {
            console.log(callback)
            this.dsbridge.register('testRegister', callback);
        } catch (error) {
        }
    };
}


let dsbridge = {};
if (global.window) {
    dsbridge = new CreateDsbridge()
}

export default dsbridge
