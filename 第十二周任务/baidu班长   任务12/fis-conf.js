
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});
fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});


fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    //allInOne: true
  })
});

fis.match('*.{css,less}', {
  packTo: '/static/aio.css'
});
