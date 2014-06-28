var Hapi = require('hapi');


function indexPage(request) {
  request.view('index', {
    host: server.settings.uri.replace(/^.*\/\//, '')
  });
}
function output(request) {
  request.reply({ myOutput: 1 });
}

var server= new Hapi.Server(+process.env.PORT, '0.0.0.0', {cors: true});

server.route([
  {method: 'GET', path: '/{path*}', handler: {directory: {path: __dirname + '/public'}} }
]);

server.start(function () {
  server.settings.uri = process.env.HOST ? 'http://' + process.env.HOST + ':' + process.env.PORT : server.settings.uri;
  console.log('Server started at ', server.settings.uri);
});
