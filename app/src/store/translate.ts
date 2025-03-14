import { proxy } from 'valtio';

import api from '@/api';

import { TranslateTextPayload } from '../../../common/types';

type Store = {
  text: string;
  targetLanguageCode: string;
  sourceLanguageCode: string;
  resultText: string;
  loading: boolean;
};

type Actions = {
  setText: (text: string) => void;
  setTargetLang: (lang: string) => void;
  setSourceLang: (lang: string) => void;
  setLoading: (value: boolean) => void;
  clear: () => void;

  translateText: () => Promise<void>;
};

export const translateState = proxy<Store & Actions>({
  text: '',
  sourceLanguageCode: 'ru',
  targetLanguageCode: 'en',
  resultText: '',
  loading: false,

  setText: (text) => {
    translateState.text = text;
  },

  clear: () => {
    translateState.resultText = '';
    translateState.text = '';
  },

  setTargetLang: (lang) => {
    translateState.targetLanguageCode = lang;
  },

  setSourceLang: (lang) => {
    translateState.sourceLanguageCode = lang;
  },

  setLoading: (value: boolean) => {
    translateState.loading = value;
  },

  translateText: async () => {
    const { text, sourceLanguageCode, targetLanguageCode, setLoading } = translateState;
    setLoading(true);

    const payload: TranslateTextPayload = {
      text,
      sourceLang: sourceLanguageCode,
      targetLang: targetLanguageCode,
    };

    try {
      const result = await api.translate.text(payload);
      translateState.resultText = result;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  },
});
