import { TranslateTextPayload } from '../../../../common/types';
import { ENDPOINTS } from '../endpoints';
import { instance } from '../instance';

export const text = async (payload: TranslateTextPayload) => {
  return (await instance.post<string>(ENDPOINTS.TRANSLATE.TEXT, payload)).data;
};
