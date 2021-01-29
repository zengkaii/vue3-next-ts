// const devConfig = require('./dev/index.js')
// const path = require('path')

const path = require('path')
console.log(path)
// const resolve = (dir) => path.join(__dirname, dir) // 路径
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
  },
  // css: {
  //   requireModuleExtension: true, // 是否开启CSSmodule并保留xxx.module.css后缀
  //   loaderOptions: {
  //       less: {
  //           javascriptEnabled: true
  //       },
  //       sass: {additionalData: `@import "@/styles/global.scss";`}
  //   }
  // },
}
