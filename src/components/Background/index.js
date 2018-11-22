import React, { Fragment, useState } from 'react';

//styles
import * as S from './styles';

//images
import desert from 'images/desert-light.svg';
import desertDark from 'images/desert-dark.svg';

function Background({ show, startLoadingLight, night }) {
  const [desertLoaded, setDesertLoad] = useState(false);

  return (
    show && (
      <Fragment>
        {startLoadingLight && <S.Desert show={!night} src={desert} />}
        <S.Desert show={night && desertLoaded} onLoad={() => setDesertLoad(true)} src={desertDark} />
      </Fragment>
    )
  );
}

export default Background;
