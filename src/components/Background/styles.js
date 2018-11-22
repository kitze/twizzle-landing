import emotion from 'react-emotion';
import { ELEMENTS, zIndexFor } from 'styles/zindex';
import { when } from 'styles/mixins';

export const Desert = emotion.img(
  {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',
    overflow: 'hidden',
    objectPosition: 'top',
    objectFit: 'cover',
    transition: 'all 150ms ease-in',
    marginTop: -2,
    opacity: 0,
    ...zIndexFor(ELEMENTS.DESERT)
  },
  when('show', {
    opacity: 1
  })
);
