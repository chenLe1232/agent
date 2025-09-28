// 定义工具调用的基础类型
export interface Tool {
  name: string;
  description: string;
  parameters: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  };
}

export interface ToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface ChatMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  tool_calls?: ToolCall[];
  tool_call_id?: string;
}

export interface WeatherParams {
  location: string;
  unit?: "celsius" | "fahrenheit";
}

export interface CalculatorParams {
  operation: "add" | "subtract" | "multiply" | "divide";
  a: number;
  b: number;
}
