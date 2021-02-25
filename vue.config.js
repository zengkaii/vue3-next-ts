// const devConfig = require('./dev/index.js')
// const path = require('path')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
    config["externals"] = {
      AMap: "AMap" // 高德地图配置
    }
  },
  pluginOptions:{
		"style-resources-loader": {
			preProcessor: "less",
			patterns: [
				//这个是加上自己的路径，
				path.resolve(__dirname, "./src/assets/less/theme.less")
			]
		}
  },
  // css: {
  //   requireModuleExtension: true, // 是否开启CSSmodule并保留xxx.module.css后缀
  //   loaderOptions: {
  //       less: {
  //           javascriptEnabled: true
  //       },
  //       sass: {additionalData: `@import "./src/assets/less/theme.scss";`}
  //   }
  // },
}
