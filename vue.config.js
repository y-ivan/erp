
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin")
const { origin } = require("./src/config")
const path = require("path")
const resolve = (dir) => path.join(__dirname, dir)
const isProduction = process.env.NODE_ENV === "production"

module.exports = {
  // baseUrl: "./",
  outputDir: "dist",
  // 开启 eslint 校验
  lintOnSave: !isProduction,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))

    // config.resolve.extensions.merge([".vue", ".js", ".json"])

    if (isProduction) {
      // 删除预加载
      // config.plugins.delete("preload")
      config.plugins.delete("prefetch")
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: "all"
      })
    }

    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/icons"))
      .end()

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end()
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new UglifyJsWebpackPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        })
      )

      // config.externals = {
      //   "vue": "Vue",
      //   "element-ui": "ELEMENT",
      //   "vue-router": "VueRouter",
      //   "vuex": "Vuex",
      //   "axios": "axios"
      // }
    }
  },

  productionSourceMap: false,

  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // 开发环境不分离确保css热更新
    extract: isProduction,
    // 开启 CSS source maps?
    sourceMap: !isProduction,
    // css预设器配置项
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // 引入全局变量样式
        data: "@import \"~@/assets/styles/variables.sass\""
      },
      scss: {
        data: "@import \"~@/assets/styles/variables.scss\";"
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: origin,
        changeOrigin: true
        // pathRewrite: {
        //   "^api": ""
        // }
      }
    }
  }

}
