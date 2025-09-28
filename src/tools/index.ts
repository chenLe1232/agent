import { Tool, WeatherParams, CalculatorParams } from "../types";

// 定义可用的工具
export const tools: Tool[] = [
  {
    name: "get_weather",
    description: "获取指定位置的天气信息",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "城市名称，例如：北京、上海",
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "温度单位",
        },
      },
      required: ["location"],
    },
  },
  {
    name: "calculator",
    description: "执行基本的数学运算",
    parameters: {
      type: "object",
      properties: {
        operation: {
          type: "string",
          enum: ["add", "subtract", "multiply", "divide"],
          description: "要执行的数学运算",
        },
        a: {
          type: "number",
          description: "第一个数字",
        },
        b: {
          type: "number",
          description: "第二个数字",
        },
      },
      required: ["operation", "a", "b"],
    },
  },
];

// 工具实现函数
export async function executeWeatherTool(
  params: WeatherParams
): Promise<string> {
  // 模拟天气API调用
  const { location, unit = "celsius" } = params;
  const temp = unit === "celsius" ? "22°C" : "72°F";

  return `${location}的当前天气：晴天，温度${temp}，湿度60%，微风。`;
}

export async function executeCalculatorTool(
  params: CalculatorParams
): Promise<string> {
  const { operation, a, b } = params;

  let result: number;
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      if (b === 0) {
        throw new Error("除数不能为零");
      }
      result = a / b;
      break;
    default:
      throw new Error(`不支持的运算：${operation}`);
  }

  return `${a} ${operation} ${b} = ${result}`;
}

// 工具执行器
export async function executeTool(name: string, params: any): Promise<string> {
  switch (name) {
    case "get_weather":
      return await executeWeatherTool(params);
    case "calculator":
      return await executeCalculatorTool(params);
    default:
      throw new Error(`未知的工具：${name}`);
  }
}
