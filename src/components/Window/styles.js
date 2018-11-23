import emotion from 'styled-components';
import flex from 'styles/flex';
import { applyTheme } from 'styles/mixins';

export const Window = emotion('div')({
  ...flex.vertical,
  borderRadius: 5,
  overflow: 'hidden',
  boxShadow: '0 0 25px 8px rgba(0, 0, 0, 0.12)',
  width: '100%'
});

export const Children = emotion.div({
  flex: 1
});

export const Buttons = emotion('div')({
  ...flex.horizontal
});

export const Button = emotion('div')(
  {
    width: 10,
    height: 10,
    borderRadius: '100%',
    marginRight: 8
  },
  ({ red, green, yellow }) => ({
    ...(red && {
      backgroundColor: '#fc635d'
    }),
    ...(green && {
      backgroundColor: '#34c84a'
    }),
    ...(yellow && {
      backgroundColor: '#fdbc40'
    })
  })
);

export const Title = emotion('div')({});

export const Empty = emotion('div')({});

export const Bar = emotion('div')(
  {
    ...flex.horizontal,
    ...flex.centerHorizontalV,
    padding: '0 10px',
    height: 23,
    minHeight: 23,
    transition: 'all 100ms linear'
  },
  applyTheme('windowBar')
);
