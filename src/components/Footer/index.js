import React from 'react';

import * as S from './styles';
import * as A from 'styles/shared-components';

const Footer = ({ composeIsOpen, menuBarPose }) => {
  return (
    <S.Footer initialPose="hidden" pose={composeIsOpen ? 'invisible' : menuBarPose}>
      <S.Links>
        <A.Link target="_blank" rel="noopener" href="https://twitter.com/thekitze">
          Made by @thekitze
        </A.Link>
        <A.Link target="_blank" rel="noopener" href="https://sizzy.co">
          Sizzy
        </A.Link>
        <A.Link href="privacy.html">Privacy</A.Link>
        <A.Link href="disclaimer.html">Disclaimer</A.Link>
        <A.Link target="_blank" rel="noopener" href="https://github.com/kitze/twizzle">
          App Source
        </A.Link>
        <A.Link target="_blank" rel="noopener" href="https://github.com/kitze/twizzle-landing">
          Website Source
        </A.Link>
      </S.Links>
    </S.Footer>
  );
};

export default Footer;
