import emotion from 'styled-components';
import FontAwesomeIcon from 'icons/Icon.js';
import flex from 'styles/flex';
import { hover, fixedSize } from 'styles/mixins';

const width = 70;
const circleWidth = 27;
const sideOffset = 5;
const transitionTime = 200;

export const DayNightSwitch = emotion.div(
  {
    ...flex.horizontal,
    ...flex.centerHorizontalV,
    outline: 'none',
    position: 'relative',
    height: 35,
    width,
    borderRadius: 17,
    transition: `all ${transitionTime}ms linear`,
    ...hover(
      {
        transform: `scale(1.05)`
      },
      {
        transform: `scale(1.03)`
      }
    )
  },
  ({ theme }) => ({
    ...(theme.clicked && {
      backgroundColor: '#595dde',
      '&:hover': {
        backgroundColor: '#5559cc'
      }
    }),
    ...(!theme.clicked && {
      backgroundColor: '#80c7cb',
      '&:hover': {
        backgroundColor: '#79bfc3'
      }
    })
  })
);

export const Icon = emotion(FontAwesomeIcon)({
  position: 'absolute',
  transition: `all ${transitionTime}ms ease-in`,
  ...fixedSize(13),
  fill: 'white'
});

export const Moon = emotion(Icon)(({ theme }) => ({
  ...(theme.clicked && {
    opacity: 1
  }),
  ...(!theme.clicked && {
    transform: `translateY(30px)`,
    opacity: 0
  })
}));

export const Star = emotion.div(
  {
    borderRadius: '100%',
    width: 3,
    height: 3,
    backgroundColor: 'white',
    position: 'absolute'
  },
  ({ size, x, y, index, theme }) => ({
    transition: `all ${50 * index}ms linear`,
    ...fixedSize(size),
    top: 8 + y,
    left: 8 + x,
    ...(!theme.clicked && {
      opacity: 0,
      transform: `translateY(10px)`
    })
  })
);

export const Stars = emotion.div({}, ({ theme }) => ({
  ...(theme.clicked && {
    opacity: 1
  })
}));

export const Circle = emotion.div(
  {
    ...flex.horizontal,
    ...flex.centerHorizontal,
    position: 'relative',
    borderRadius: '100%',
    width: circleWidth,
    overflow: 'hidden',
    height: 27,
    transition: `all ${transitionTime}ms ease-in`
  },
  ({ theme }) => {
    const translateX = theme.clicked ? width - circleWidth - sideOffset : sideOffset;
    return {
      ...(theme.clicked && {
        transform: `translateX(${translateX}px)`,
        backgroundColor: 'rgba(255,255,255,0.4)',
        border: '2px solid rgba(255,255,255,0.9)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.3)'
        }
      }),
      ...(!theme.clicked && {
        transform: `translateX(${translateX}px)`,
        backgroundColor: '#fddf75',
        border: '3px solid #d6b05eb5',
        '&:hover': {
          backgroundColor: '#fff0bb'
        }
      })
    };
  }
);
