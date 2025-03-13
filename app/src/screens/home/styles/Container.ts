import { Box } from '@gravity-ui/uikit';
import { styled } from 'styled-components';

export const Container = styled(Box)`
  display: flex;
  gap: 1rem;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
