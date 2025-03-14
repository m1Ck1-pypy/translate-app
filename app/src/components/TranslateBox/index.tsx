import { useSnapshot } from 'valtio';

import { translateState } from '@/store/translate';

import CustomTArea from '../CustomTArea';
import SelectLang from '../SelectLang';
import { Group } from './styles/Group';
import { Root } from './styles/Root';

const TranslateBox = () => {
  const { text, setText, sourceLanguageCode, targetLanguageCode, setSourceLang, setTargetLang, resultText } =
    useSnapshot(translateState);

  const onUpdateTarget = (value: string[]) => {
    if (!value[0]) return;
    setTargetLang(value[0]);
  };

  const onUpdateSource = (value: string[]) => {
    if (!value[0]) return;
    setSourceLang(value[0]);
  };

  return (
    <Root>
      <Group>
        <SelectLang value={sourceLanguageCode} onUpdate={onUpdateSource} />
        <CustomTArea value={text} onChange={setText} placeholder='Введите текст для перевода' />
      </Group>
      <Group>
        <SelectLang value={targetLanguageCode} onUpdate={onUpdateTarget} isCopy />
        <CustomTArea value={resultText} />
      </Group>
    </Root>
  );
};

export default TranslateBox;
