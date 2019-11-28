
export default {
    DOMAIN: 'master',
    modifyMapDomain: function(host) {
        // 
        switch (host) {
            case 'localhost':
                this.DOMAIN = 'rc'
                break;
            default:
                break;
        }
    }
}