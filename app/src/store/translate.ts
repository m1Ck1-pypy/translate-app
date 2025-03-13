import { proxy } from 'valtio';

import api from '@/api';

import { TranslateTextPayload } from '../../../common/types';

type Store = {
  text: string;
  targetLanguageCode: string;
  sourceLanguageCode: string;
  resultText: string;
};

type Actions = {
  setText: (text: string) => void;
  setTargetLang: (lang: string) => void;
  setSourceLang: (lang: string) => void;

  translateText: () => Promise<void>;
};

export const translateState = proxy<Store & Actions>({
  text: '',
  sourceLanguageCode: 'ru',
  targetLanguageCode: 'en',
  resultText: '',

  setText: (text) => {
    translateState.text = text;
  },

  setTargetLang: (lang) => {
    translateState.targetLanguageCode = lang;
  },

  setSourceLang: (lang) => {
    translateState.sourceLanguageCode = lang;
  },

  translateText: async () => {
    const { text, sourceLanguageCode, targetLanguageCode } = translateState;

    const payload: TranslateTextPayload = {
      text,
      sourceLang: sourceLanguageCode,
      targetLang: targetLanguageCode,
    };

    try {
      const result = await api.translate.text(payload);
      // eslint-disable-next-line no-console
      console.log('🚀 ~ result:', result);
    } catch (error) {
      console.error(error);
    }
  },
});
