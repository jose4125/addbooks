var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: [
      'gulp-*',
      'express',
      'connect-livereload'
    ]
    });
var liveReloadPort = 35729,
    server = $.express();

gulp.task('serve-dev', function(){
  var serverPort = 8000
  server.use($.connectLivereload({
    port: liveReloadPort
  }));
  server.use($.express.static('./'));
  server.listen(serverPort);
  console.log('runing in port: ', serverPort);
})

