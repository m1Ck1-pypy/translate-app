import { Select } from '@gravity-ui/uikit';
import { FunctionComponent } from 'react';
import { useSnapshot } from 'valtio';

import CopyIcon from '@/assets/icons/copy.svg';
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
};

const SelectLang: FunctionComponent<Props> = ({ value, onUpdate, isCopy }) => {
  const snap = useSnapshot(translateState);

  const handleClearFields = () => snap.clear();
  const handleCopyText = () => {
    if (snap.resultText) {
      navigator.clipboard.writeText(snap.resultText);
    }
  };

  return (
    <Root>
      <Select width={150} options={selectOptions} defaultValue={[LANGUAGES.ru]} value={[value]} onUpdate={onUpdate} />
      <Actions>
        {isCopy && !!value && (
          <Icon src={CopyIcon} width={20} height={20} color='#666666' title='Скопировать' onClick={handleCopyText} />
        )}
        <Icon src={XMarkIcon} width={20} height={20} color='#666666' title='Очистить' onClick={handleClearFields} />
      </Actions>
    </Root>
  );
};

export default SelectLang;
