import styled from 'styled-components';
import flex from 'styles/flex';

export const Circle = styled.div({
  ...flex.vertical,
  ...flex.centerVertical
});

export const ProgressRing = styled.svg({
  position: 'relative',
  transform: 'rotate(-90deg)'
});

export const Text = styled.div({
  fontSize: 10,
  color: '#8799a6',
  position: 'absolute',
  transform: 'translateY(1px)'
});
