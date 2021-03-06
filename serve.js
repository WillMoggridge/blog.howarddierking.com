const serve = require('metalsmith-serve');
const watch = require('metalsmith-watch');

require('./build-pipeline')
  .use(serve({
    host: "0.0.0.0",
    port: "8080",
    verbose: true
  }))
  .use(watch({
    pattern: '**/*',
    livereload: true
  }))
  .build(err => {
  if(err)
    console.log(err)
  else
    console.log('Site build complete!');
  });
