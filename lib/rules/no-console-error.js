/**
 * @fileoverview no console.error() in your code
 * @author mya.gong
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "no console.error() in your code",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    // 报错信息描述
    messages: {
      avoidMethod: "'{{name}}' function of console is forbidden in code",
    },
  },

  create(context) {
    return {
      // 'MemberExpression'  这个就是AST的节点选择器，在遍历AST时，如果命中该选择器，就会触发回调
      // 关于选择器的名称，我们可以事先在 https://astexplorer.net/ 中找到目标解析器然后将其作为key即可
      //  这里的选择器会在AST"自上至下"过程中触发，如果希望是"自下至上"过程中触发，需要加':exit'即MemberExpression:exit
      'MemberExpression': (node) => {
        // 如果在AST遍历中满足以下条件，就用 context.report() 进行对外警告⚠️
        if (node.property.name === 'error' && node.object.name === 'console') {
            context.report({
                node,
                messageId: 'avoidMethod',
                data: {
                    name: node.property.name,
                },
            });
        }
      },
    };
  },
};
