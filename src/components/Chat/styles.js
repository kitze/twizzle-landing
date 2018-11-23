import emotion from 'react-emotion';
import { blackish, fixedSize, getThemeColor, hover, when, whiteish } from 'styles/mixins';
import flex from 'styles/flex';
import Icon from 'icons/Icon';
import pose from 'react-pose';

export const Chat = emotion.div(
  {
    ...flex.vertical,
    flex: 1
  },
  ({ theme }) => ({
    borderLeft: `1px solid #0d141b`
  })
);

export const Content = emotion.div({
  ...flex.vertical,
  padding: 15,
  flex: 1
});

export const Messages = emotion.div({
  ...flex.vertical,
  flex: 1,
  overflowY: 'auto',
  maxHeight: 500,
  overflowX: 'hidden'
});

export const Message = emotion(
  pose.div({
    enter: {
      x: 0,
      opacity: 1,
      delay: ({ index, added, initialMount }) => {
        if (added) {
          return 0;
        }
        return initialMount ? 500 : 0 + index * 100;
      },
      scale: 0.9
    },
    exit: {
      x: ({ alternate }) => (alternate ? 50 : -50),
      opacity: 0,
      scale: 0
    }
  })
)(
  {
    ...flex.horizontal,
    ...flex.centerHorizontalV,
    borderRadius: 15,
    padding: '5px 10px',
    minHeight: 35,
    flexShrink: 'none',
    maxWidth: 300,
    marginBottom: 10,
    textDecoration: 'none',
    color: 'white',
    fontSize: 16,
    lineHeight: '18px',
    transition: 'all 100ms linear',
    opacity: 0
  },
  ({ theme, alternate, href }) => ({
    backgroundColor: alternate ? theme.colors.messageBubble2 : theme.colors.messageBubble1,
    ...(alternate && {
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      textAlign: 'right',
      borderBottomRightRadius: 0
    }),
    ...(!alternate && {
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
      borderBottomLeftRadius: 0
    }),
    ...(href && {
      '&:hover': {
        transform: 'translateY(-1px)'
      }
    })
  })
);

export const Bar = emotion.div(
  {
    ...flex.horizontal,
    ...flex.centerHorizontalV,
    height: 56,
    padding: 15
  },
  getThemeColor('bar', 'backgroundColor')
);

export const Name = emotion.a({
  fontSize: 17,
  fontWeight: 'bold',
  textDecoration: 'none',
  color: whiteish(0.8),
  transition: 'all 100ms linear',
  '&:hover': {
    color: whiteish(1)
  }
});

const offset = 15;

export const Input = emotion.input(
  {
    borderRadius: 3,
    backgroundColor: '#192530',
    padding: 10,
    paddingRight: 10 + offset + 15,
    border: 'none',
    outline: 'none',
    width: '100%',
    color: 'white',
    resize: 'none',
    borderBottom: '2px solid #1da1f2'
  },
  when('disabled', {
    borderBottom: '2px solid #e0245d'
  })
);

export const InputWrap = emotion.div({
  position: 'relative',
  ...flex.horizontal,
  ...flex.centerHorizontalV
});

export const SendButton = emotion.button(
  {
    ...flex.horizontal,
    ...flex.centerHorizontal,
    outline: 'none',
    border: 'none',
    borderRadius: '100%',
    ...fixedSize(25),
    backgroundColor: blackish(0.3),
    position: 'absolute',
    right: offset,
    transition: 'all 100ms linear',
    ...hover({
      backgroundColor: blackish(0.5)
    })
  },
  when('disabled', {
    opacity: 0.5,
    cursor: 'not-allowed'
  })
);

export const SendIcon = emotion(Icon)({
  fill: 'white',
  ...fixedSize(20)
});
