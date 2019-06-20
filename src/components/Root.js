import React, { Fragment } from 'react';
import { useRouter } from 'react-tiniest-router';
import { routes } from '../config/routes';
import App from 'components/App';
import { useBoolean } from 'react-hanger';
import CheckoutPage from './CheckoutPage';
import { ThemeProvider } from 'styled-components';
import themes from 'styles/themes';
import { useToggleBodyClass } from '../utils/hooks';

const Root = () => {
  const { isRoute } = useRouter();
  const isAnimationDone = useBoolean(false);
  const night = useBoolean(true);
  useToggleBodyClass(night, ['dark', 'light']);

  return (
    <ThemeProvider theme={themes[night.value ? 'dark' : 'light']}>
      <Fragment>
        {isRoute(routes.home) && <App night={night} isAnimationDone={isAnimationDone} />}
        {isRoute(routes.license) && <div>license page</div>}
        {isRoute(routes.checkout) && <CheckoutPage />}
      </Fragment>
    </ThemeProvider>
  );
};

export default Root;
