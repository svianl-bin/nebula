// 修改 eslint 配置前，建议先删除缓存文件 .eslintcache
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import eslintJs from '@eslint/js'
import vueEslint from 'eslint-plugin-vue'
import tsEslint from 'typescript-eslint'
import globals from 'globals'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 读取 .auto-import.json 文件的内容，并将其解析为 JSON 对象
const autoImportConfig = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.eslint-config-auto-import.json'), 'utf-8')
)

export default [
    // 指定全局变量和环境
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                __APP_VERSION__: true
            }
        }
    },

    // 指定文件匹配规则
    {
        files: ['**/*.{js,ts,mjs,cjs,mts,tsx,vue}']
    },

    // 忽略文件配置
    {
        ignores: [
            'node_modules/',
            'dist/',
            '*.d.ts',
            '.env',
            '.env.*',
            '.vscode/',
            '.idea/',
            '*.css',
            '*.scss',
            '*.less'
        ]
    },

    // 扩展配置
    eslintJs.configs.recommended,
    ...tsEslint.configs.recommended,
    ...vueEslint.configs['flat/essential'],

    // 自定义规则
    {
        files: ['**/*.{js,mjs,cjs,ts,vue}'],
        languageOptions: {
            globals: {
                // 合并从 autoImportConfig 中读取的全局变量配置
                ...autoImportConfig.globals
            }
        },
        rules: {
            // 使用单引号
            quotes: ['error', 'single'],
            // 语句末尾不加分号
            semi: ['error', 'never'],
            // 要求使用 let 或 const 而不是 var
            'no-var': 'error',
            // 禁用 any 检查
            '@typescript-eslint/no-explicit-any': 'off',
            // 不允许多个空行
            'no-multiple-empty-lines': ['warn', { max: 1 }],
            // 禁止空余的多行
            'no-unexpected-multiline': 'error',
            // 禁用对 Vue 组件名称的多词要求检查
            'vue/multi-word-component-names': 'off'
        }
    },

    // vue 规则
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: { parser: tsEslint.parser }
        }
    },

    // 解决 ESlint 与 Prettier 冲突
    eslintPluginPrettier
]
