export interface AiConfigs {
  assistantName: string,
  systemInstructions: string,
  model: string,
  modelName: string,
  generationConfig:{
    topK: number|string,
    topP: number|string,
    maxOutputTokens: number|string,
    temperature: number|string,
  }
}
