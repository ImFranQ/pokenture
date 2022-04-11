import {extendTheme, type ThemeConfig} from '@chakra-ui/react';

const colors = {
  primary: {
    50: '#fefce1',
    100: '#fdf9b3',
    200: '#fcf580',
    300: '#fbf04d',
    400: '#faed27',
    500: '#f9ea01',
    600: '#f8e701',
    700: '#f7e401',
    800: '#f6e101',
    900: '#f5db00',
    A100: '#ffffff',
    A200: '#fffce8',
    A400: '#fff6b5',
    A700: '#fff39c',
  },
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({config, colors});

export default theme;
