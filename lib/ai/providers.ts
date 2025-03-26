import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import {createOpenRouter} from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model-small': chatModel,
        'chat-model-best': chatModel,
        'chat-model-large': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model-small': openrouter('mistralai/mistral-small-3.1-24b-instruct:free'),
        'chat-model-best': openai('gpt-4o-mini'),
        'chat-model-large': openrouter('deepseek/deepseek-chat-v3-0324:free'),
        // 'chat-model-reasoning': wrapLanguageModel({
        //   model: fireworks('accounts/fireworks/models/deepseek-r1'),
        //   middleware: extractReasoningMiddleware({ tagName: 'think' }),
        // }),
        'chat-model-reasoning': openrouter('google/gemini-exp-1206:free'),
        'title-model': openai('gpt-4o-mini-2024-07-18'),
        'artifact-model': openrouter('openai/gpt-4o-mini'),
      },
      imageModels: {
        'small-model': openai.image('dall-e-2'),
        'large-model': openai.image('dall-e-3'),
      },
    });
