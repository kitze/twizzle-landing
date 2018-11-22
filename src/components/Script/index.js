import React, { Suspense } from 'react';
import { createResource } from './scriptResource';

export const ScriptResource = createResource(
  ({ src }) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = reject;
      document.body.appendChild(script);
    });
  },
  ({ src }) => src
);

export const Script = ({ children, ...rest }) => {
  ScriptResource.read(rest);
  if (typeof children === 'function') {
    return children();
  }

  return children;
};

export const LoadScript = ({ src, children, startLoading }) =>
  startLoading ? (
    <Suspense fallback={children(false)}>
      <Script src={src}>{children(true)}</Script>
    </Suspense>
  ) : (
    children(false)
  );
