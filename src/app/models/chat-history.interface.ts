export interface ChatHistory{
  user: 'CLIENT' | 'AI',
  message: string,
  timestamp?: Date | string
}
