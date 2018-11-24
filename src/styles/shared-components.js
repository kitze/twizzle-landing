import flex from '../styles/flex';
import styled from 'styled-components';
import { Horizontal as $Horizontal, Vertical as $Vertical } from './flex-components';
import {hover, whenTheme} from "styles/mixins";

export const Horizontal = $Horizontal;
export const Vertical = $Vertical;

export const Space = styled('div')(
  {
    height: 15,
    width: 15
  },
  ({ huge }) => ({
    ...(huge && {
      height: 50,
      width: 50
    })
  })
);


export const Hover = styled.span(
  {
    backgroundColor: 'rgba(255,255,255, 0.2)',
    padding: `2px 7px`,
    borderRadius: 5,
    transition: 'all 150ms linear',
    ...hover({
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    })
  },
  whenTheme('light', {
    backgroundColor: 'rgba(255,255,255, 0.5)'
  })
);
