import { Box } from '@gravity-ui/uikit';
import { styled } from 'styled-components';

export const Root = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
