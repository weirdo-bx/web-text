// 启用 fis-spriter-csssprites 插件  压缩css
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css',
  useHash: true,
  useSprite: true,
  optimizer: fis.plugin('clean-css'),

})
 
// 文件是否携带md5戳
fis.match('*', {
  useHash: false
});
// 加 md5
fis.match('*.{js,css,less,png}', {
  useHash: true
});

//启用 fis-optimizer-html-minifier 插件 压缩html
fis.match('*.tpl', {
  optimizer: fis.plugin('html-compress')
})
// 对html进行压缩
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});