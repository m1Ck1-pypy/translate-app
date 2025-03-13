import { Select } from '@gravity-ui/uikit';
import { FunctionComponent } from 'react';

import { LANGUAGES } from '@/common/languages';

const selectOptions = Object.entries(LANGUAGES).flatMap(([lang, name]) => ({
  content: name,
  value: lang,
}));

type Props = {
  onUpdate?: (value: string[]) => void;
  value: string;
};

const SelectLang: FunctionComponent<Props> = ({ value, onUpdate }) => {
  return (
    <Select width={150} options={selectOptions} defaultValue={[LANGUAGES.ru]} value={[value]} onUpdate={onUpdate} />
  );
};

export default SelectLang;
