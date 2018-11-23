import emotion from 'styled-components';
import flex from 'styles/flex';
import { applyTheme, getThemeColor, hover, when } from 'styles/mixins';

//components
import Icon from 'icons/Icon';

export const Button = emotion.button(
  {
    ...flex.horizontal,
    ...flex.centerHorizontal,
    userSelect: 'none',
    outline: 'none',
    border: 'none',
    fontSize: 18,
    borderRadius: 4,
    maxWidth: 200,
    padding: 15,
    width: '100%',
    transition: 'all 150ms linear',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)'
  },
  applyTheme('button'),
  when('disabled', {
    opacity: 0.5,
    cursor: 'not-allowed'
  }),
  ({ theme }) => ({
    ...(!theme.disabled && {
      ...hover({
        background: theme.button.backgroundHover
      })
    })
  })
);

export const AppleIcon = emotion(Icon)(
  {
    marginRight: 15,
    width: 20,
    height: 20,
    position: 'relative',
    top: -1
  },
  getThemeColor('text', 'fill')
);
