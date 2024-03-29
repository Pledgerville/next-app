import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { extendTheme } from '@chakra-ui/react';
import { Button } from './button';
import { Input } from './input';

export const theme = extendTheme({
  colors: {
    brand: {
      100: '#FF3c00',
    },
  },
  fonts: {
    body: 'Open Sans, sans-serif',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'gray.100',
      },
    }),
  },
  components: {
    Button,
    Input,
  },
});
