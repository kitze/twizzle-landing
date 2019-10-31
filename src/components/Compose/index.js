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
  const tweet = () => window.open(`http://twitter.com/share?text=${text}&url=https://twizzle.app`);
  const alertForImage = () => alert('You can add images and gifs from the real app 😜️');
  const alertForPolls = () => alert('You can attach polls from the real app 😜️');
  const remaining = 240 - text.length;
  const overLimit = remaining < 0;

  const compose = (
    <S.Compose onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} visible={visible} className="compose">
      <S.Bar>
        <S.Tweet
          disabled={text.trim() === '' || overLimit || !visible}
          onClick={tweet}
          {...(visible
            ? {
                role: 'button',
                tabIndex: 0,
                onKeyPress: e => {
                  if (e.which === 13 || e.which === 32) {
                    tweet(e);
                  }
                }
              }
            : {})}
        >
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
            <S.IconWrap
              onClick={alertForImage}
              {...(visible
                ? {
                    role: 'button',
                    tabIndex: 0,
                    onKeyPress: e => {
                      if (e.which === 13 || e.which === 32) {
                        alertForImage(e);
                      }
                    }
                  }
                : {})}
            >
              <S.ActionIcon icon={image} />
            </S.IconWrap>
            <S.IconWrap
              onClick={alertForPolls}
              {...(visible
                ? {
                    role: 'button',
                    tabIndex: 0,
                    onKeyPress: e => {
                      if (e.which === 13 || e.which === 32) {
                        alertForPolls(e);
                      }
                    }
                  }
                : {})}
            >
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
        {composeIsOpen && (
          <S.Overlay
            key="overlay"
            onClick={() => setComposeOpen(false)}
            {...(visible
              ? {
                  role: 'button',
                  tabIndex: 0,
                  onKeyPress: e => {
                    if (e.which === 13 || e.which === 32) {
                      setComposeOpen(false);
                    }
                  }
                }
              : {})}
          />
        )}
      </PoseGroup>
      {compose}
    </Fragment>
  );

  return ReactDOM.createPortal(content, document.getElementById('compose'));
}

export default Compose;
