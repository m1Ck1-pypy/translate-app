import axios from 'axios';
import Bun from 'bun';
import dotenv from 'dotenv';

import type { TranslateTextPayload } from '../../common/types';

dotenv.config();

const PORT = 3000;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const fetchYandexTextTranslate = async (data: TranslateTextPayload): Promise<string> => {
  const payload = {
    folderId: process.env.YC_FOLDER_ID,
    texts: [data.text],
    targetLanguageCode: data.targetLang,
    sourceLanguageCode: data.sourceLang,
  };

  try {
    const res = await axios.post(process.env.YTRANSLATE_CLOUD_URL!, payload, {
      headers: {
        Authorization: process.env.YC_IAM,
        'Content-Type': 'application/json',
      },
    });

    const data: { translations: [{ text: string }] } = await res.data;
    return data.translations[0].text;
  } catch (error) {
    console.error(error);

    return 'An error occurred during translation.';
  }
};

const server = Bun.serve({
  port: PORT,
  async fetch(request: Request) {
    const { method } = request;
    const { pathname } = new URL(request.url);

    if (method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: CORS_HEADERS });
    }

    if (method === 'POST' && pathname === '/translate') {
      const data: TranslateTextPayload = await request.json();
      const result = await fetchYandexTextTranslate(data);

      return new Response(result, { status: 200, headers: CORS_HEADERS });
    }

    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  },
});

// eslint-disable-next-line no-console
console.log(`Listening on PORT: ${server.port}`);
