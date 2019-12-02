import React from 'react';

//styles
import * as S from './styles';

function DownloadButton({ onClick }) {
  return (
    <S.Button
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={e => {
        if ((e.which === 13 || e.which === 32) && onClick) {
          onClick(e);
        }
      }}
    >
      <span>Download</span>
    </S.Button>
  );
}

export default DownloadButton;
