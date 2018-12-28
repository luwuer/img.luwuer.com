/**
* vue 打包后保留配置文件
* 1.配置文件放在static(vue cli 2) / public (vue cli 3)目录下避免被打包
* 2.在 eslintrc.js文件中添加globals全局变量
* 3.在项目中引用
* 4.存放在vuex中
* @author luwuer
*/

window.config = {
  // baseUrl: process.env === 'development' ? '/api' : '',
  baseUrl: '',
  weibo: {
    CLIENT_ID: '2542429913',
    CLIENT_SECRET: '37778a16f5552f180a68c06de06a2cdb',
    REDIRECT_URI: 'img.luwuer.com'
  }
}
