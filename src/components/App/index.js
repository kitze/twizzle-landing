import React, { useRef, useState } from 'react';

//icons (imported as svg using babel plugin)
import faBatteryFull from '../../icons/bat-charge.svg';
import faVolumeUp from '../../icons/volume-up.svg';
import faWifi from '../../icons/wifi.svg';
import faFeather from '../../icons/feather.svg';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';

//components
import Messages from 'components/Messages';
import DayNightSwitch from 'components/DayNightSwitch';
import MenuBar from 'components/MenuBar';
import Compose from 'components/Compose';
import ToggleCount from 'components/ToggleCount';
import BuyButton from 'components/DownloadButton';
import Background from 'components/Background';
import Footer from 'components/Footer';

//hooks
import {
  useGoogleAnalytics,
  useHovered,
  useToggleBodyClass,
  useFindElementCenter,
  useMousePosition,
  useCanHover,
  useClock
} from 'utils/hooks';

import useIntroAnimation from './use-intro-animation';

import 'focus-visible';
import { isDev } from '../../utils/dev-prod';

//env
const { REACT_APP_ANALYTICS_ID, REACT_APP_DOWNLOAD_LINK } = process.env;
const canBuyInDev = true;

const redirectDownload = () => {
  if (window.location.href.includes('get-app')) {
    window.location.replace(REACT_APP_DOWNLOAD_LINK);
  }
};

function Home({ isAnimationDone, night }) {
  redirectDownload();

  const [composeIsOpen, setComposeOpen] = useState(false);
  const [toggleCount, setToggleCount] = useState(0);

  const [text, setText] = useState(
    `Woah! With twizzle.app I can use Twitter DMs and tweet directly from the menubar. Sweet! 😄️`
  );

  // refs
  const contentRef = useRef();
  const messagesWindowRef = useRef();

  //custom hooks
  const isInSizzy = window.__sizzy;
  const { fabPose, menuBarPose, messagesPose, homePose } = useIntroAnimation(!isInSizzy, isAnimationDone);
  const canHover = useCanHover();
  const isHoveringMessages = useHovered();
  const isHoveringCompose = useHovered();
  const windowCenter = useFindElementCenter(messagesWindowRef);
  const { y: mouseY } = useMousePosition(isHoveringCompose.value);
  const clock = useClock();

  // side effects
  useGoogleAnalytics(REACT_APP_ANALYTICS_ID, isAnimationDone.value);
  useToggleBodyClass(isAnimationDone.value, ['scroll', 'no-scroll']);

  // computed
  const isNotHoveringMenuBar = mouseY === null || mouseY >= 25;
  const showComposeWindow = composeIsOpen || (isHoveringCompose.value && isNotHoveringMenuBar);
  const isBig = window.innerWidth > 450;

  // methods
  const onToggleNight = () => {
    night.toggle();
    setToggleCount(toggleCount + 1);
  };

  const tweetProgress = () => {
    setText(
      `I'm having too much fun with the day/night switch on twizzle.app 🤦️ ${toggleCount} times so far! 😂️`
    );
    setComposeOpen(true);
  };

  const buy = async () => {
    if (isDev) {
      if (canBuyInDev === false) {
        return alert('Buying app...');
      }
    }
  };

  return (
    <S.Home>
      <S.MainSection>
        <Background night={night.value} startLoadingLight={isAnimationDone.value} show={isBig} />

        <MenuBar
          className="menubar"
          pose={menuBarPose}
          selected={showComposeWindow}
          onClick={() => setComposeOpen(v => !v)}
          mainIcon={faFeather}
          icons={[faWifi, clock, faVolumeUp, '100%', faBatteryFull]}
        />

        <Compose
          {...isHoveringCompose.bind}
          text={text}
          setText={setText}
          setComposeOpen={setComposeOpen}
          composeIsOpen={composeIsOpen}
          visible={showComposeWindow}
        />

        <S.Content ref={contentRef}>
          <S.WindowBox ref={messagesWindowRef} initialPose="hidden" pose={homePose} {...windowCenter}>
            <S.Window night={night.value} hovering={isHoveringMessages.value}>
              <Messages
                messagesPose={messagesPose}
                fabPose={fabPose}
                night={night.value}
                onToggleNight={onToggleNight}
              />
            </S.Window>
          </S.WindowBox>

          <A.Space huge />

          <S.TextContent isAnimationDone={isAnimationDone.value} pose={homePose}>
            <S.Title> Twizzle </S.Title>

            <A.Space huge />
            <S.Subtitle>
              <span>
                Focus on <A.Hover {...isHoveringMessages.bind}>messages</A.Hover> and{' '}
                <A.Hover
                  {...(canHover ? isHoveringCompose.bind : { onClick: () => setComposeOpen(true) })}
                  className="tweeting"
                >
                  tweeting
                </A.Hover>
              </span>
              <br />
              <span>The timeline can wait.</span>
            </S.Subtitle>

            <A.Space />

            <BuyButton onClick={buy} startLoading={isAnimationDone.value} />

            <A.Space />

            <S.Platforms>Supports macOS, Windows, and Linux</S.Platforms>

            <A.Space />

            <DayNightSwitch value={night.value} onChange={onToggleNight} />
            <ToggleCount onTweet={tweetProgress} count={toggleCount} />
          </S.TextContent>
        </S.Content>
      </S.MainSection>
      <Footer composeIsOpen={composeIsOpen} menuBarPose={menuBarPose} />
    </S.Home>
  );
}

export default Home;
