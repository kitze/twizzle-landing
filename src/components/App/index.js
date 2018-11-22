import React, { useRef, useState } from 'react';

//icons (imported as svg using babel plugin)
import faBatteryFull from '../../icons/bat-charge.svg';
import faVolumeUp from '../../icons/volume-up.svg';
import faWifi from '../../icons/wifi.svg';
import faFeather from '../../icons/feather.svg';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';
import themes from 'styles/themes';

//components
import Messages from 'components/Messages';
import DayNightSwitch from 'components/DayNightSwitch';
import MenuBar from 'components/MenuBar';
import Compose from 'components/Compose';
import ToggleCount from 'components/ToggleCount';
import BuyButton from 'components/BuyButton';
import Background from 'components/Background';
import { ThemeProvider } from 'emotion-theming';

//hooks
import {
  useGoogleAnalytics,
  useHovered,
  useToggleBodyClass,
  useFindElementCenter,
  useMousePosition,
  useCanHover
} from 'utils/hooks';
import useIntroAnimation from './use-intro-animation';

//env
const { REACT_APP_ANALYTICS_ID } = process.env;

function Home() {
  const [composeIsOpen, setComposeOpen] = useState(false);
  const [toggleCount, setToggleCount] = useState(0);
  const [night, setNight] = useState(true);
  const [text, setText] = useState(
    `Woah! With twizzy.app I can use Twitter DMs and tweet directly from the menubar. Sweet! 😄️`
  );

  // refs
  const contentRef = useRef();
  const messagesWindowRef = useRef();

  //custom hooks
  const { isAnimationDone, fabPose, menuBarPose, messagesPose, homePose } = useIntroAnimation(false);
  const canHover = useCanHover();
  const isHoveringMessages = useHovered();
  const isHoveringCompose = useHovered();
  const windowCenter = useFindElementCenter(messagesWindowRef);
  const { y: mouseY } = useMousePosition(isHoveringCompose.value);

  // side effects
  useGoogleAnalytics(REACT_APP_ANALYTICS_ID, isAnimationDone);
  useToggleBodyClass(night, ['dark', 'light']);
  useToggleBodyClass(isAnimationDone, ['scroll', 'no-scroll']);

  // computed
  const isNotHoveringMenuBar = mouseY === null || mouseY >= 25;
  const showComposeWindow = composeIsOpen || (isHoveringCompose.value && isNotHoveringMenuBar);
  const isBig = window.innerWidth > 450;

  // methods
  const onToggleSwitch = () => {
    setNight(n => !n);
    setToggleCount(toggleCount + 1);
  };

  const tweetProgress = () => {
    setText(
      `I'm having too much fun with the day/night switch on twizzy.app 🤦️ ${toggleCount} times so far! 😂️`
    );
    setComposeOpen(true);
  };

  return (
    <ThemeProvider theme={themes[night ? 'dark' : 'light']}>
      <S.Home>
        <S.MainSection>
          <Background night={night} startLoadingLight={isAnimationDone} show={isBig} />

          <MenuBar
            className="menubar"
            pose={menuBarPose}
            selected={showComposeWindow}
            onClick={() => setComposeOpen(v => !v)}
            mainIcon={faFeather}
            icons={[faWifi, 'Wed 10:40', faVolumeUp, '100%', faBatteryFull]}
          />

          <Compose
            {...isHoveringCompose.bind}
            text={text}
            setText={setText}
            setComposeOpen={setComposeOpen}
            composeIsOpen={composeIsOpen}
            visible={showComposeWindow}
          />

          <S.Content innerRef={contentRef}>
            <S.WindowBox innerRef={messagesWindowRef} initialPose="hidden" pose={homePose} {...windowCenter}>
              <S.Window night={night} hovering={isHoveringMessages.value}>
                <Messages messagesPose={messagesPose} fabPose={fabPose} night={night} />
              </S.Window>
            </S.WindowBox>

            <A.Space huge />

            <S.TextContent isAnimationDone={isAnimationDone} pose={homePose}>
              <S.Title> Twizzy </S.Title>

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

              <BuyButton startLoading={isAnimationDone} />

              <A.Space />

              <DayNightSwitch value={night} onChange={onToggleSwitch} />
              <ToggleCount onTweet={tweetProgress} count={toggleCount} />
            </S.TextContent>
          </S.Content>
        </S.MainSection>
        <S.Footer initialPose="hidden" pose={composeIsOpen ? 'invisible' : menuBarPose}>
          <S.Links>
            <S.Link href="mailto:contact@twizzy.app">Contact</S.Link>
            <S.Link href="privacy.html">Privacy</S.Link>
            <S.Link href="disclaimer.html">Disclaimer</S.Link>
          </S.Links>
        </S.Footer>
      </S.Home>
    </ThemeProvider>
  );
}

export default Home;
