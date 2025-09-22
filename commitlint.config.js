export default {
    // 继承已有规则
    extends: ['@commitlint/config-conventional'],

    // 自定义规则
    rules: {
        // type 类型定义，表示提交的类型必须在以下范围内
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新增功能
                'fix', // 修复缺陷
                'docs', // 文档变更
                'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
                'refactor', // 代码重构（不包括 bug 修复、功能新增）
                'perf', // 性能优化
                'test', // 添加疏漏测试或已有测试改动
                'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
                'ci', // 修改 CI 配置、脚本
                'revert', // 回滚 commit
                'chore', // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
                'wip', // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
                'workflow', // 工作流文件修改
                'types', // 类型定义文件修改
                'release' // 发布版本
            ]
        ],
        // subject大小写不做校验
        'subject-case': [0]
    },

    // 交互式命令行提示
    prompt: {
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围（可选）:',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixesSelect: '选择关联issue前缀（可选）:',
            customFooterPrefix: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            confirmCommit: '是否提交或修改commit ?'
        },
        // prettier-ignore
        types: [
            { value: 'feat',        name: '特性:  新增功能' },
            { value: 'fix',         name: '修复:  修复缺陷' },
            { value: 'docs',        name: '文档:  文档变更(更新README文件，或者注释)' },
            { value: 'style',       name: '格式:  代码格式（空格、格式化、缺失的分号等）' },
            { value: 'refactor',    name: '重构:  代码重构（不修复错误也不添加特性的代码更改）' },
            { value: 'perf',        name: '性能:  性能优化' },
            { value: 'test',        name: '测试:  添加疏漏测试或已有测试改动' },
            { value: 'build',       name: '构建:  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）' },
            { value: 'ci',          name: '集成:  修改 CI 配置、脚本' },
            { value: 'revert',      name: '回退:  回滚 commit' },
            { value: 'chore',       name: '其他:  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
            { value: 'wip',         name: '开发中:  尚未完成的功能开发（临时提交）' },
            { value: 'workflow',    name: '工作流:  工作流文件修改' },
            { value: 'types',       name: '类型:  类型定义文件修改（如 .d.ts 文件、TS 类型调整）' },
            { value: 'release',     name: '发布:  发布版本（如更新版本号、生成 CHANGELOG）' }
        ],
        // 显示表情符号
        useEmoji: true,
        // 表情符号的对齐方式
        emojiAlign: 'center',
        customScopesAlign: 'bottom',
        emptyScopesAlias: 'empty',
        customScopesAlias: 'custom',
        allowBreakingChanges: ['feat', 'fix']
    }
}
