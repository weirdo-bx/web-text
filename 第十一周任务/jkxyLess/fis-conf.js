// 启用 fis-spriter-csssprites 插件  压缩css
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
//启用 fis-optimizer-html-minifier 插件 压缩html
fis.match('*.tpl', {
  optimizer: fis.plugin('html-compress')
})

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

// 对js的压缩
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

// 对 CSS 进行图片合并
// fis.match('*.css', {
//   useSprite: true,
//   // fis-optimizer-clean-css 插件进行压缩
//   optimizer: fis.plugin('clean-css')
// });

// 优化处理
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// 加 md5
fis.match('*.{js,css,less,png}', {
  useHash: true
});

// 对js的合并
fis.match("::package",{
  postpackager:fis.plugin("loader")
});
fis.match("*.js",{
  packTo:'/pkg/jkxy.js'
});
fis.match('/js/jquery.min.js', {
  packOrder: -100//packOrder 越小的越在前面
});

// 对html进行压缩
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});