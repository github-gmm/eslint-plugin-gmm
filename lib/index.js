/**
 * @fileoverview 自定义eslint规则
 * @author mya.gong
 */
"use strict";

var requireIndex = require("requireindex");

module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
    recommended: {
        plugins: ["eslint-plugin-gmm"],
        rules: {
            'gmm/no-console-error': 2, // 可以省略 eslint-plugin 前缀
        },
    },
};
