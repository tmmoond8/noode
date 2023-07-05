import { extendTheme } from '@chakra-ui/react';
import { theme as baseTheme } from '@chakra-ui/theme';
const colors = {
  brand: {
    // 900: '#1a365d',
    // 800: '#153e75',
    // 700: '#2a69ac',
  },
};
export const theme = extendTheme({
  colors,
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
  },
  components: {
    Stack: {
      defaultProps: {
        gap: 2,
      },
    },
  },
});

type BaseTheme = typeof baseTheme;
export interface Theme extends BaseTheme {}

export const useTheme = (): typeof baseTheme => {
  return theme as typeof baseTheme;
};
