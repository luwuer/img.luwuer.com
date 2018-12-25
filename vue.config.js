// const path = require('path')

// 多线程压缩js
// const WebpackParalleUglify = require('webpack-parallel-uglify-plugin')

// 打包时间可视化分析
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

// 打包过程中各个模块、插件占用时间精确统计
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const smp = new SpeedMeasurePlugin()

module.exports = {
  // 基本路径
  baseUrl: '/',

  // 输出文件目录
  outputDir: 'dist',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  pages: undefined,

  // use the full build with in-browser compiler?

  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only

  runtimeCompiler: false,

  transpileDependencies: [],

  // webpack配置

  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md

  chainWebpack: () => {},

  configureWebpack: () => {
    // return smp.wrap({
    //   resolve: {
    //     alias: {
    //       '@': path.resolve('src')
    //     }
    //   },
    //   plugins: [
    //     new BundleAnalyzerPlugin({
    //       analyzerMode: 'server',
    //       analyzerHost: '127.0.0.1',
    //       analyzerPort: 8888,
    //       reportFilename: 'report.html',
    //       defaultSizes: 'parsed',
    //       openAnalyzer: true,
    //       generateStatsFile: false,
    //       statsFilename: 'stats.json',
    //       logLevel: 'info'
    //     }),
    //     new WebpackParalleUglify({
    //       cacheDir: '.cache/',
    //       uglifyJS: {
    //         output: {
    //           comments: false
    //         },
    //         compress: {
    //           warnings: false
    //         }
    //       }
    //     })
    //   ]
    // })
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin

    extract: true,

    // 开启 CSS source maps?

    sourceMap: false,

    // css预设器配置项

    loaderOptions: {},

    // 启用 CSS modules for all css / pre-processor files.

    modules: false
  },

  // use thread-loader for babel & TS in production build

  // enabled by default if the machine has more than 1 cores

  parallel: require('os').cpus().length > 1,

  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // webpack-dev-server 相关配置
  devServer: {
    host: '127.0.0.1',

    port: 8080,

    https: false,

    hotOnly: false,

    proxy: null // 设置代理
  },

  // 第三方插件配置
  pluginOptions: {}
}
