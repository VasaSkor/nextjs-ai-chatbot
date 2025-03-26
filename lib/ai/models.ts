export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'mistral-small-3.1-24b-instruct',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'chat-model-best',
    name: 'gpt-4o-mini',
    description: 'Best model for fast, lightweight tasks',
  },
  {
    id: 'chat-model-large',
    name: 'deepseek-chat-v3-0324',
    description: 'Large model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'gemini-exp-1206',
    description: 'Uses advanced reasoning',
  },
];
