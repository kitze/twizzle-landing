import React, { useEffect, useState, useRef } from 'react';
import { replaceUrlParams, createRouter } from './utils';
import { mapObject } from './utils';

export const RouterContext = React.createContext({});

const Router = ({ children, routes }) => {
  const [state, setState] = useState({
    pageId: '',
    path: '/',
    params: {},
    queryParams: {},
    extra: {},
    options: {}
  });

  const router = useRef(null);
  const currentUrl = replaceUrlParams(state.path, state.params, state.queryParams);

  useEffect(() => {

    //create a router from the routes object
    router.current = createRouter(
      mapObject(routes, route => {
        return {
          key: route.path,
          value: params => {
            openPage(route, params);
          }
        };
      })
    );

    //initial location
    router.current(window.location.pathname);

    //on change route
    window.onpopstate = ev => {
      if (ev.type === 'popstate') {
        router.current(window.location.pathname);
      }
    };
  }, []);

  useEffect(
    () => {
      if (window.location.pathname !== currentUrl) {
        window.history.pushState(null, null, currentUrl);
      }
    },
    [currentUrl]
  );


  const openPage = (page, params = {}, queryParams = {}, extra = {}) => {
    const { id, path, extra: pageExtra } = page;
    setState({ ...state, pageId: id, path, params, queryParams, extra: { ...pageExtra, ...extra } });
  };

  return (
    <RouterContext.Provider value={{ ...state, openPage, currentUrl, isRoute: route => route.id === state.pageId }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
