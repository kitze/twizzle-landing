import React from 'react';
import { useRouter } from 'react-tiniest-router';
import { routes } from '../config/routes';
import App from 'components/App';
import { useBoolean } from 'react-hanger';

const Root = () => {
  const { isRoute } = useRouter();
  const isAnimationDone = useBoolean(false);

  return (
    <div>
      {isRoute(routes.home) && <App isAnimationDone={isAnimationDone} />}
      {isRoute(routes.license) && <div>license page</div>}
      {isRoute(routes.checkout) && <div>checkout page</div>}
    </div>
  );
};

export default Root;
