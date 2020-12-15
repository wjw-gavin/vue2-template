const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: "error",
  devServer: {
    proxy: {
      "/api": {
        target: "https://tms.ooyunche.cn",
        changeOrigin: true //是否跨域
      }
    },
    // 设置默认端口
    port: 4200,
    disableHostCheck: true
  },
  productionSourceMap: false,
  // 全局引入scss变量文件, main.js直接引入无法识别变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/style/var.scss";`
      }
    }
  },
  configureWebpack: (config) => {
    config["externals"] = {
      vue: "Vue",
      vuex: "Vuex",
      axios: "axios",
      vant: "vant",
      "vue-router": "VueRouter"
    };
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
    // 修复HMR
    config.resolve.symlinks(true);
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  }
};
