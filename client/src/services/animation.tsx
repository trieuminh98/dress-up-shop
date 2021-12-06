import { keyframes } from '@mui/system';

export const fadeInRight = (xPosition: number) => {
  return keyframes`
  0% {
    opacity: 0;
    transform: translateX(${xPosition}px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
};
