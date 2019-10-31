import React from 'react';
import getText from './get-text';

//styles
import * as S from './styles';

//components
import { Hover } from 'styles/shared-components';
import { onEnterAndClick } from 'utils/utils';

function ToggleCount({ count, onTweet }) {
  const initialLimit = count >= 5;
  const text = getText(count, initialLimit);

  return (
    initialLimit && (
      <S.ToggleCount>
        <div>{text}</div>
        <div>
          <b>{count}</b> times so far!
        </div>
        <br />
        <div>
          <Hover role="button" tabIndex={0} {...onEnterAndClick(onTweet)}>
            Tweet progress
          </Hover>
        </div>
      </S.ToggleCount>
    )
  );
}

export default ToggleCount;
