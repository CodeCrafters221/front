export interface AiConfigs {
  ASSISTANT_NAME: string,
  SYSTEM_INSTRUCTIONS: string,
  MODEL_NAME: string,
  GEMINI_NAME: string,
  GENERATION_CONFIG:{
    topK: number|string,
    topP: number|string,
    maxOutputTokens: number|string,
    temperature: number|string,
  }
}
