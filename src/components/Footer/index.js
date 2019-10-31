import React from 'react';

import * as S from './styles';

const Footer = ({ composeIsOpen, menuBarPose }) => {
  return (
    <S.Footer initialPose="hidden" pose={composeIsOpen ? 'invisible' : menuBarPose}>
      <S.Links>
        <S.Link target="_blank" rel="noopener" href="https://twitter.com/thekitze">
          Made by @thekitze
        </S.Link>
        <S.Link target="_blank" rel="noopener" href="https://sizzy.co">
          Sizzy
        </S.Link>
        <S.Link href="privacy.html">Privacy</S.Link>
        <S.Link href="disclaimer.html">Disclaimer</S.Link>
        <S.Link target="_blank" rel="noopener" href="https://github.com/kitze/twizzle">
          App Source
        </S.Link>
        <S.Link target="_blank" rel="noopener" href="https://github.com/kitze/twizzle-landing">
          Website Source
        </S.Link>
      </S.Links>
    </S.Footer>
  );
};

export default Footer;
