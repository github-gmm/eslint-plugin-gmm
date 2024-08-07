/**
 * @fileoverview 自定义eslint规则
 * @author mya.gong
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  rules: {
  	  // 项目在使用时，对应的规则名称
      'no-console-error': require('./rules/no-console-error'),
  },
  configs: {
      recommended: {
          rules: {
              'demo/no-console-error': 2, // 可以省略 eslint-plugin 前缀
          },
      },
  },
}
