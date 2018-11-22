import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';

//components
import TweetCircle from 'components/TweetCircle';
import { PoseGroup } from 'react-pose';

//icons
import image from '../../icons/image.svg';
import bars from '../../icons/bars.svg';

function Compose({ visible, text, onMouseLeave, onMouseOver, setText, composeIsOpen, setComposeOpen }) {
  const tweet = () => window.open(`http://twitter.com/share?text=${text}&url=https://twizzy.app`);
  const remaining = 240 - text.length;
  const overLimit = remaining < 0;

  const compose = (
    <S.Compose onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} visible={visible} className="compose">
      <S.Bar>
        <S.Tweet disabled={text.trim() === '' || overLimit} onClick={tweet}>
          Tweet
        </S.Tweet>
      </S.Bar>
      <S.Content>
        <S.Input
          placeholder="What's happening?"
          overLimit={overLimit}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <S.Bottom>
          <A.Horizontal centerV spaceAll={0}>
            <S.IconWrap onClick={() => alert('You can add images and gifs from the real app 😜️')}>
              <S.ActionIcon icon={image} />
            </S.IconWrap>
            <S.IconWrap onClick={() => alert('You can attach polls from the real app 😜️')}>
              <S.ActionIcon style={{ position: 'relative', top: -2 }} icon={bars} />
            </S.IconWrap>
          </A.Horizontal>
          {overLimit ? (
            <S.OverLimitText>{remaining}</S.OverLimitText>
          ) : (
            <TweetCircle remaining={remaining} length={text.length} />
          )}
        </S.Bottom>
      </S.Content>
    </S.Compose>
  );

  let content = (
    <Fragment>
      <PoseGroup>
        {composeIsOpen && <S.Overlay key="overlay" onClick={() => setComposeOpen(false)} />}
      </PoseGroup>
      {compose}
    </Fragment>
  );

  return ReactDOM.createPortal(content, document.getElementById('compose'));
}

export default Compose;
