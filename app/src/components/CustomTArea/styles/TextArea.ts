import { TextArea as GTextArea } from '@gravity-ui/uikit';
import styled from 'styled-components';
export const TextArea = styled(GTextArea)`
  min-width: 320px;

  @media screen and (max-width: 768px) {
    min-width: 0;
  }
`;
