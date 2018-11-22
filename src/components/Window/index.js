import React from 'react';
import * as S from './styles';

const Window = ({ children, night, ...rest }) => (
  <S.Window {...rest}>
    <S.Bar>
      <S.Buttons>
        <S.Button red />
        <S.Button yellow />
        <S.Button green />
      </S.Buttons>
      <S.Title />
      <S.Empty />
    </S.Bar>
    <S.Children>{children}</S.Children>
  </S.Window>
);

export default Window;
