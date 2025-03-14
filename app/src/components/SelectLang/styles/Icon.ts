import { Box } from '@gravity-ui/uikit';
import { styled } from 'styled-components';

type Props = {
  src: string;
  color?: string;
  width?: number;
  height?: number;
  theme: string;
};

export const Icon = styled(Box)<Props>`
  width: ${({ width }) => (width ? pxToRem(width) : pxToRem(16))};
  height: ${({ height }) => (height ? pxToRem(height) : pxToRem(16))};

  mask: ${({ src }) => `${urlForSvg(src)} center no-repeat`};
  mask-size: contain;
  background-color: ${({ color }) => (color ? color : '#333')};

  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }
`;

export const urlForSvg = (svgUrl: string) => `url("${svgUrl}")`;
const initialPxValue = 16;

export const pxToRem = (px: number, initPx = initialPxValue): string => {
  return `${px / initPx}rem`;
};
