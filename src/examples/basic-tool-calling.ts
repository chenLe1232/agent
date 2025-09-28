import OpenAI from 'openai';
import { tools, executeTool } from '../tools/index.js';
import { ChatMessage } from '../types/index.js';

// 初始化OpenAI客户端
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-api-key-here'
});

export async function runBasicToolCallingExample() {
  try {
    console.log('🚀 开始基础工具调用示例...\n');
    
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: '你是一个有用的AI助手，可以使用各种工具来帮助用户解决问题。'
      },
      {
        role: 'user',
        content: '请帮我查一下北京的天气，然后计算一下15加23等于多少。'
      }
    ];

    console.log('👤 用户问题:', messages[1].content);
    console.log('🤖 AI开始处理...\n');

    // 调用OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      tools: tools.map(tool => ({
        type: 'function' as const,
        function: tool
      })),
      tool_choice: 'auto'
    });

    const assistantMessage = response.choices[0].message;
    
    if (assistantMessage.tool_calls && assistantMessage.tool_calls.length > 0) {
      console.log('🔧 AI决定使用工具:\n');
      
      // 执行每个工具调用
      for (const toolCall of assistantMessage.tool_calls) {
        const { name, arguments: args } = toolCall.function;
        console.log(`调用工具: ${name}`);
        console.log(`参数: ${args}\n`);
        
        try {
          const params = JSON.parse(args);
          const result = await executeTool(name, params);
          
          console.log(`✅ 工具执行结果: ${result}\n`);
          
          // 添加工具调用结果到消息历史
          messages.push({
            role: 'assistant',
            content: '',
            tool_calls: [toolCall]
          });
          
          messages.push({
            role: 'tool',
            content: result,
            tool_call_id: toolCall.id
          });
          
        } catch (error) {
          console.error(`❌ 工具执行失败: ${error}\n`);
        }
      }
      
      // 再次调用API获取最终响应
      const finalResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages
      });
      
      console.log('🤖 AI最终回答:', finalResponse.choices[0].message.content);
      
    } else {
      console.log('🤖 AI回答:', assistantMessage.content);
    }
    
  } catch (error) {
    console.error('❌ 示例执行失败:', error);
  }
}

// 如果直接运行此文件
if (import.meta.url === `file://${process.argv[1]}`) {
  runBasicToolCallingExample();
}