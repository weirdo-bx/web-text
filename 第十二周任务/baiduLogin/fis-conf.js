// 启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*', {
  useHash: false
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});
// 对 CSS 进行图片合并
fis.match('*.css', {
  useSprite: true,
  // fis-optimizer-clean-css 插件进行压缩
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});

fis.config.set('modules.postpackager','simple');
fis.config.set('pack',{
	// 'pkg/baiduLogin.js':[
	// 	'**.js'
	// ],
	'pkg/baiduLogin.css':[
		'**.css'
	],
});