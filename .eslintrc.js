module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-redeclare': 2, // 禁止重复声明变量
    'no-empty': 2, // 块语句中的内容不能为空
    'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
    'no-invalid-regexp': 2, // 禁止无效的正则表达式
    'no-lonely-if': 'off', // 禁止else语句内只有if语句
    'no-multi-spaces': 1, // 不能用多余的空格
    'no-self-compare': 2, // 不能比较自身
    'no-undef': 1, // 不能有未定义的变量
    'no-undef-init': 2, // 变量初始化时不能直接给它赋值为undefined
    'no-unreachable': 2, // 不能有无法执行的代码
    'no-unused-expressions': 2, // 禁止无用的表达式
    'space-before-blocks': 2, // 函数块前面要加空格
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-multiple-empty-lines': [1, {
      'max': 5
    }], // 强制连续空行的最大数量
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-var': 0, // 禁用var，用let和const代替
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'no-inline-comments': 0, //  禁止行内注释
     // 回调嵌套深度
    'new-cap': 0, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // 对象字面量中冒号的前后空格
    'vars-on-top': 2,  // var必须放在作用域顶部
    'eqeqeq': 2, // 必须使用全等
    'strict': 2, // 使用严格模式
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
