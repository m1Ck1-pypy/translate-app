// import { TextArea } from '@gravity-ui/uikit';
import { FunctionComponent } from 'react';

import { TextArea } from './styles/TextArea';

type Props = {
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
};

const CustomTArea: FunctionComponent<Props> = ({ placeholder, value, onChange }) => {
  return (
    <TextArea
      minRows={5}
      maxRows={15}
      view='normal'
      size='xl'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export default CustomTArea;
