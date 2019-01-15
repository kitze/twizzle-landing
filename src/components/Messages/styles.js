import styled from 'styled-components';
import flex from 'styles/flex';
import posed from 'react-pose';
import FontAwesomeIcon from 'icons/Icon.js';

//mixins
import { hover, applyTheme, getThemeColor } from 'styles/mixins';
import { smaller } from 'styles/responsive';

export const Messages = styled.div(
  {
    ...flex.vertical,
    width: '100%',
    flex: 1,
    fontSize: 15,
    transition: 'all 100ms linear',
    position: 'relative',
    userSelect: 'none',
    [smaller(320)]: {
      fontSize: 13
    }
  },
  applyTheme('messages')
);

export const Icon = styled(FontAwesomeIcon)(({ color, theme, fill }) => ({
  fill: fill || theme.colors.icon,
  width: 17,
  height: 17
}));

export const FabAnimated = posed.div({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
});

export const Fab = styled(FabAnimated)({
  ...flex.vertical,
  ...flex.centerVertical,
  backgroundColor: '#059ff5',
  width: 60,
  height: 60,
  color: 'white',
  position: 'absolute',
  bottom: 15,
  right: 15,
  borderRadius: '100%'
});

export const Bar = styled.div(
  {
    ...flex.horizontal,
    ...flex.spaceBetween,
    ...flex.centerHorizontalV,
    transition: 'all 100ms linear',
    height: 56,
    padding: 15,
    width: '100%'
  },
  applyTheme('bar')
);

export const List = styled.div({});

export const Title = styled.div({});

const Animated = posed.a({
  exit: { x: ({ index }) => -50 + index * 5, opacity: 0 },
  enter: { x: 0, opacity: 1, delay: ({ index }) => 1000 + index * 100 }
});

export const Message = {
  Wrap: styled(Animated)(
    {
      ...flex.horizontal,
      ...flex.centerHorizontalV,
      height: 65,
      transition: 'all 100ms linear',
      padding: '25px 10px',
      overflow: 'hidden',
      textDecoration: 'none'
    },
    applyTheme('messageWrap'),
    ({ clickable, theme }) => ({
      ...(clickable && {
        ...hover({
          backgroundColor: theme.name === 'dark' ? '#16212d' : '#efefef'
        })
      })
    })
  ),
  Mid: styled.div({
    ...flex.vertical,
    ...flex.centerVerticalV,
    ...flex.spaceChildren(5, 'vertical'),
    flex: 1,
    overflow: 'hidden'
  }),
  Avatar: styled.img({
    borderRadius: '100%',
    width: 50,
    height: 50,
    maxHeight: 50,
    maxWidth: 50,
    marginRight: 12,
    minWidth: 50,
    minHeight: 50
  }),
  Name: styled.div(
    {
      fontWeight: 'bold'
    },
    getThemeColor('text')
  ),
  Username: styled.div({}, getThemeColor('dimmed')),
  Message: styled.div(
    {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      flex: 1,
      width: '100%'
    },
    getThemeColor('dimmed')
  ),
  Time: styled.div(
    {
      marginLeft: 10,
      fontSize: 14,
      textAlign: 'right'
    },
    getThemeColor('dimmed')
  )
};

export const MessageFab = styled.div({});
