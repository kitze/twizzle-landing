import emotion from 'styled-components';
import flex from 'styles/flex';
import Icon from 'icons/Icon';
import pose from 'react-pose';
import { hover, when } from 'styles/mixins';
import { smaller, breakpoints } from 'styles/responsive';

import { ELEMENTS, zIndexFor } from 'styles/zindex';

export const Compose = emotion.div(
  {
    position: 'absolute',
    top: 25,
    right: 50,
    maxWidth: 400,
    width: '100%',
    ...zIndexFor(ELEMENTS.COMPOSE),
    transition: 'all 200ms ease-in',
    transform: `translateY(-250px)`,
    borderRadius: 7,
    overflow: 'hidden',
    opacity: 0,
    color: 'white',
    [smaller(breakpoints.phone)]: {
      maxWidth: 450,
      right: 0,
      left: 0,
      borderRadius: 0
    }
  },
  when('visible', {
    transform: `translateY(0)`,
    opacity: 1
  })
);

export const Overlay = emotion(
  pose.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
)(
  {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'fixed',
    top: 0,
    left: 0,
    ...zIndexFor(ELEMENTS.OVERLAY),
    height: '100vh',
    width: '100vw'
  }
);

export const OverLimitText = emotion.div({
  color: '#e0245d',
  fontSize: 14
});

export const IconWrap = emotion.div({
  ...flex.vertical,
  ...flex.centerVertical,
  transition: 'all 100ms linear',
  borderRadius: '100%',
  width: 35,
  height: 35,
  ...hover({
    backgroundColor: '#1b3549'
  })
});

export const ActionIcon = emotion(Icon)({
  fill: '#1da1f2',
  width: 18
});

export const Bar = emotion.div({
  ...flex.horizontal,
  ...flex.centerHorizontalV,
  justifyContent: 'flex-end',
  padding: '0px 10px',
  height: 50,
  backgroundColor: '#243547'
});

export const Tweet = emotion.button(
  {
    ...flex.vertical,
    ...flex.centerVertical,
    backgroundColor: '#1da1f2',
    color: 'white',
    borderRadius: 15,
    width: 75,
    height: 15,
    padding: 15,
    border: 'none',
    outline: 'none',
    transition: 'all 100ms linear'
  },
  when(
    'disabled',
    { opacity: 0.5, cursor: 'default' },
    {
      ...hover({ backgroundColor: '#1a89d2' })
    }
  )
);

export const Content = emotion.div({
  backgroundColor: '#1a2836',
  padding: 10
});

export const Bottom = emotion.div({
  ...flex.horizontal,
  ...flex.centerHorizontalV,
  ...flex.spaceBetween
});

export const Input = emotion.textarea(
  {
    borderRadius: 3,
    backgroundColor: '#192530',
    padding: 10,
    border: 'none',
    outline: 'none',
    minHeight: 105,
    width: '100%',
    color: 'white',
    resize: 'none',
    borderBottom: '2px solid #1da1f2'
  },
  when('disabled', {
    borderBottom: '2px solid #e0245d'
  })
);
