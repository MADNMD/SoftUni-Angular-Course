class Data {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}
const myData = new Data('GET', 'http://google.com', 'HTTP/1.2', '');
console.log(myData);
