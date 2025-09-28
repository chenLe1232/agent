# AI工具调用学习项目

这是一个用于学习AI工具调用（Tool Calling）功能的TypeScript项目，使用OpenAI API和各种工具调用场景。

## 功能特性

- ✨ 基础的工具调用示例
- 🧮 计算器工具
- 🌤️ 天气查询工具（模拟）
- 📦 使用pnpm进行包管理
- 🔧 TypeScript类型支持
- 🚀 支持开发模式和热重载

## 项目结构

```
src/
├── types/          # 类型定义
├── tools/          # 工具定义和实现
├── examples/       # 示例代码
└── index.ts        # 项目入口
```

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

复制环境变量示例文件：
```bash
cp .env.example .env
```

编辑`.env`文件，添加你的OpenAI API Key：
```bash
OPENAI_API_KEY=your-openai-api-key-here
```

### 3. 运行示例

```bash
# 运行主程序
pnpm dev

# 运行特定示例
pnpm example:basic

# 开发模式（热重载）
pnpm watch
```

## 可用脚本

- `pnpm dev` - 运行项目
- `pnpm build` - 编译TypeScript
- `pnpm start` - 运行编译后的代码
- `pnpm watch` - 开发模式，支持热重载
- `pnpm example:basic` - 运行基础工具调用示例

## 学习内容

### 基础工具调用
- 如何定义工具（函数）
- 如何向AI模型传递工具定义
- 如何处理AI的工具调用请求
- 如何将工具执行结果返回给AI

### 示例工具
1. **天气查询工具** - 模拟API调用
2. **计算器工具** - 基本数学运算

## 技术栈

- **TypeScript** - 类型安全
- **OpenAI API** - AI模型和工具调用
- **pnpm** - 包管理器
- **tsx** - TypeScript执行器

## 扩展学习

你可以基于这个项目继续学习：

1. 添加更多工具（文件操作、网络请求等）
2. 实现流式响应
3. 添加对话历史管理
4. 集成其他AI模型
5. 添加错误处理和日志

## 贡献

欢迎提交Issue和Pull Request！