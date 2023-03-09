const getUrl = window.location;
const webbaseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
const hostUrl = getUrl.protocol + "//" + getUrl.host;
// console.log('hostUrl url is ' + hostUrl);
let baseUrl = '';
let allowOrigin = '';
let authToken = 'null';

/** Set the api base url based on the web base url */
switch(hostUrl) {
    case 'http://10.1.10.10:9203': 
        baseUrl = 'http://localhost:8081/v1'; 
        allowOrigin = 'http://10.1.10.10:9203';
        break;
    case 'https://qamind.acmetutor.com':
        baseUrl = 'https://qamindapi.acmetutor.com/v1';
        allowOrigin = 'https://qamind.acmetutor.com';
        break;
    case 'https://mind.acmetutor.com':
        baseUrl = 'https://mindapi.acmetutor.com/v1'; 
        allowOrigin = 'https://mind.acmetutor.com';
        break;
    default: 
        baseUrl = 'https://mindapi.acmetutor.com/v1'; 
        allowOrigin = 'https://mind.acmetutor.com';
        break;
}

// module.exports = {
//     baseUrl,
//     allowOrigin
// }