import React from 'react';
import App from 'components/App';
import { useBoolean } from 'react-hanger';
import { ThemeProvider } from 'styled-components';
import themes from 'styles/themes';
import { useToggleBodyClass } from '../utils/hooks';
import { hot } from 'react-hot-loader/root';
import { isDev } from 'utils/dev-prod';

const Root = () => {
  const isAnimationDone = useBoolean(false);
  const night = useBoolean(true);
  useToggleBodyClass(night.value, ['dark', 'light']);

  return (
    <ThemeProvider theme={themes[night.value ? 'dark' : 'light']}>
      <App night={night} isAnimationDone={isAnimationDone} />
    </ThemeProvider>
  );
};

export default isDev ? hot(Root) : Root;
