function route(handle, pathname) {
    console.log('About to route a request for' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } 
    else {
        console.log('No request handler found for ' + pathname);
        return '404 Not found';
    }
}

function start() {
    console.log('Request handler "start" was called.');
    return 'Hello Start';
}

function upload() {
    console.log('Request handler "upload" was called.');
    return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
exports.route = route;
