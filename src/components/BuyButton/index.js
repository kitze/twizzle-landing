import React from 'react';

import { LoadScript } from 'components/LoadScript';
import * as S from './styles';

//icons
import faDownload from '../../icons/download.svg';

function BuyButton({ startLoading, buy }) {

  return (
    <LoadScript startLoading={startLoading} src="https://cdn.paddle.com/paddle/paddle.js">
      {ready => (
        <S.Button
          disabled={!ready}
          onClick={ready ? buy : null}
          role="button"
          tabIndex={0}
          onKeyPress={e => {
            if ((e.which === 13 || e.which === 32) && ready) {
              buy(e);
            }
          }}
        >
          <S.AppleIcon icon={faDownload} />
          <span>Buy now</span>
        </S.Button>
      )}
    </LoadScript>
  );
}

export default BuyButton;
