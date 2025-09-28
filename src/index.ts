import { runBasicToolCallingExample } from './examples/basic-tool-calling.js';

async function main() {
  console.log('🎯 AI工具调用学习项目\n');
  console.log('这个项目用于学习AI工具调用的各种场景和技术\n');
  
  // 运行基础示例
  await runBasicToolCallingExample();
}

// 运行主函数
main().catch(console.error);