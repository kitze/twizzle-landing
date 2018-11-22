import React from 'react';
import { ThemeProvider } from 'styled-components';

//icons
import faMoon from '../../icons/moon-inv.svg';

//glamorous
import * as S from './styles';

function DayNightSwitch({ value, onChange }) {
  return (
    <ThemeProvider theme={{ clicked: value }}>
      <S.DayNightSwitch onClick={onChange}>
        <S.Stars>
          <S.Star index={1} size={2} x={10} y={3} />
          <S.Star index={2} size={1} x={3} y={7} />
          <S.Star index={3} size={1} x={12} y={18} />
          <S.Star index={4} size={1} x={15} y={10} />
          <S.Star index={5} size={1} x={19} y={4} />
          <S.Star index={6} size={2} x={22} y={14} />
        </S.Stars>
        <S.Circle>
          <S.Moon icon={faMoon} />
        </S.Circle>
      </S.DayNightSwitch>
    </ThemeProvider>
  );
}

export default DayNightSwitch;
