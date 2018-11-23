import emotion from 'styled-components';
import flex from 'styles/flex';

export const Circle = emotion.div({
  ...flex.vertical,
  ...flex.centerVertical
});

export const ProgressRing = emotion.svg({
  position: 'relative',
  transform: 'rotate(-90deg)'
});

export const Text = emotion.div({
  fontSize: 10,
  color: '#8799a6',
  position: 'absolute',
  transform: 'translateY(1px)'
});
