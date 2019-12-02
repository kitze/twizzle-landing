import styled from 'styled-components';
import flex from 'styles/flex';
import pose from 'react-pose';
import { ELEMENTS, zIndexFor } from 'styles/zindex';
import { smaller, smallerHeight } from 'styles/responsive';

export const Links = styled.div({
  ...flex.horizontal,
  ...flex.centerHorizontal
});

export const Footer = styled(
  pose.div({
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 30 },
    invisible: { opacity: 0, y: 0 }
  })
)(
  {
    position: 'fixed',
    ...zIndexFor(ELEMENTS.FOOTER),
    backgroundColor: '#393e52',
    transition: 'all 100ms linear',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: '7px 15px',
    overflow: 'hidden',
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    opacity: 0
  },
  ({ theme }) => ({
    ...(theme.name === 'light' && {
      backgroundColor: '#ffdc55'
    }),
    [smaller(750)]: {
      position: 'relative',
      ...zIndexFor(ELEMENTS.FOOTER),
      width: '100%',
      backgroundColor: theme.name === 'dark' ? '#243244' : '#b2cc9f'
    },
    [smallerHeight(715)]: {
      position: 'relative',
      ...zIndexFor(ELEMENTS.FOOTER),
      width: '100%'
    }
  })
);

