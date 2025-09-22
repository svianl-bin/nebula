export default {
    // 继承已有规则
    extends: [
        // 配置 stylelint 拓展插件
        'stylelint-config-standard',
        // 配置 stylelint scss 插件
        'stylelint-config-standard-scss',
        // 配置 vue 中 scss 样式格式化
        'stylelint-config-recommended-vue/scss',
        // 配置 vue 中 template 样式格式化
        'stylelint-config-html/vue',
        // 配置 stylelint css 属性书写顺序插件
        'stylelint-config-recess-order'
    ],

    // 指定不同文件对应的解析器
    overrides: [
        {
            files: ['**/*.{vue,html}'],
            customSyntax: 'postcss-html'
        },
        {
            files: ['**/*.{css,scss}'],
            customSyntax: 'postcss-scss'
        }
    ],

    // 自定义规则（与 .prettierrc 保持兼容）
    rules: {
        // 忽略 Vue 文件中 style 标签相关的未知错误
        'no-invalid-position-at-import-rule': null,
        'no-empty-source': null, // 允许空样式
        // 允许 global 、export 、deep伪类
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'export', 'deep']
            }
        ],
        // 允许未知规则
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'apply',
                    'use',
                    'mixin',
                    'include',
                    'extend',
                    'each',
                    'if',
                    'else',
                    'for',
                    'while'
                ]
            }
        ],
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: ['first-nested'],
                ignore: ['after-comment']
            }
        ]
    }
}
