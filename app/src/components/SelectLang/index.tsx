import { Select, useTheme } from '@gravity-ui/uikit';
import { FunctionComponent } from 'react';
import { useSnapshot } from 'valtio';

import api from '@/api';
import CopyIcon from '@/assets/icons/copy.svg';
import VolumeIcon from '@/assets/icons/volume.svg';
import XMarkIcon from '@/assets/icons/xmark.svg';
import { LANGUAGES } from '@/common/languages';
import { translateState } from '@/store/translate';

import { Actions } from './styles/Actions';
import { Icon } from './styles/Icon';
import { Root } from './styles/Root';

const selectOptions = Object.entries(LANGUAGES)
  .flatMap(([lang, name]) => ({
    content: name,
    value: lang,
  }))
  .sort((a, b) => a.content.localeCompare(b.content));

type Props = {
  onUpdate?: (value: string[]) => void;
  value: string;
  isCopy?: boolean;
  textVoice?: string;
};

const SelectLang: FunctionComponent<Props> = ({ value, onUpdate, isCopy, textVoice }) => {
  const theme = useTheme();
  const snap = useSnapshot(translateState);

  const handleClearFields = () => snap.clear();
  const handleCopyText = () => {
    if (snap.resultText) {
      navigator.clipboard.writeText(snap.resultText);
    }
  };

  const handleVolumeText = async () => {
    if (!textVoice || snap.audioLoading) return;
    snap.setAudioLoading(true);

    const result = await api.translate.synthesize(textVoice);

    const url = URL.createObjectURL(result);
    playAudio(url);

    snap.setAudioLoading(false);
  };

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <Root>
      <Select width={150} options={selectOptions} defaultValue={[LANGUAGES.ru]} value={[value]} onUpdate={onUpdate} />
      <Actions>
        <Icon
          src={VolumeIcon}
          width={20}
          height={20}
          color='#666666'
          title='Воспроизвести'
          onClick={handleVolumeText}
          theme={theme}
        />
        {isCopy && !!value && (
          <Icon
            src={CopyIcon}
            width={20}
            height={20}
            color='#666666'
            title='Скопировать'
            onClick={handleCopyText}
            theme={theme}
          />
        )}
        <Icon
          src={XMarkIcon}
          width={20}
          height={20}
          color='#666666'
          title='Очистить'
          onClick={handleClearFields}
          theme={theme}
        />
      </Actions>
    </Root>
  );
};

export default SelectLang;
