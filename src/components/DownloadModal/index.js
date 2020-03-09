import React, { useEffect, lazy, Suspense } from 'react';
import Rodal from 'rodal';
import { useBoolean, useNumber, useInput } from 'react-hanger';
import isemail from 'isemail';
import axios from 'axios';

//styles
import 'rodal/lib/rodal.css';
import * as S from './styles';
import * as L from 'layout-styled-components';
import * as A from 'styles/shared-components';

//components
import ProductList from 'components/ProductList';
import Checkbox from 'components/Checkbox';

//lazy
const Confetti = lazy(() => import('react-dom-confetti'));

const { REACT_APP_SUB_TOKEN, REACT_APP_SUB_URL, REACT_APP_DOWNLOAD_LINK } = process.env;

const confettiConfig = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 90,
  decay: 0.9
};

const Link = ({ children, ...props }) => (
  <A.Link rel="noopener" target="_blank" {...props} showBorder>
    {children}
  </A.Link>
);

const STEPS = {
  INITIAL: 0,
  DOWNLOAD: 1,
};

const subscribeUser = email =>
  axios.post(
    REACT_APP_SUB_URL,
    { email },
    {
      headers: {
        Authorization: `Token ${REACT_APP_SUB_TOKEN}`
      }
    }
  );

const DownloadModal = ({ onClose }) => {
  const email = useInput('');
  const loading = useBoolean(false);
  const clickedDownload = useBoolean(false);
  const isInputValid = email.hasValue && isemail.validate(email.value, { minDomainAtoms: 2 });
  const privacy = useBoolean(false);
  const subscribed = useBoolean(false);
  const countdown = useNumber(5);
  const step = useNumber(0);

  const onSubscribe = async () => {
    loading.setTrue();
    try {

      await subscribeUser(email.value);
      loading.setFalse();
      subscribed.setTrue();
    } catch (err) {
      loading.setFalse();
      alert(`Couldn't subscribe. Error: ${err.toString()}`);
      console.error(err);
    }
  };

  const checked = privacy.value === true;
  const currentStep = step.value;
  const secondsLeft = countdown.value;
  const enableDownload = secondsLeft === 0;
  const downloadLabel = enableDownload ? 'Download Twizzle' : `Download will be ready soon...`;
  const disableSubscribe = loading.value || !isInputValid;
  const subscribing = loading.value;
  const hasSubscribed = subscribed.value;
  const twitterLink = 'https://twitter.com/twizzle_app';
  const showConfetti = clickedDownload.value || subscribed.value;

  useEffect(() => {
    if (secondsLeft > 0 && currentStep === STEPS.DOWNLOAD) {
      setTimeout(countdown.decrease, 1000);
    }
  }, [currentStep, secondsLeft]);

  return (
    <S.Modal>
      <Rodal measure="auto" onClose={onClose} visible={true}>
        <L.Vertical spaceAll={13}>
          <Suspense fallback={null}>
            <div style={{ position: 'relative', left: 180, top: 500 }}>
              <Confetti active={showConfetti} config={confettiConfig} />
            </div>
          </Suspense>

          {currentStep === STEPS.INITIAL && (
            <L.Vertical spaceAll={25}>
              <S.Title>Download Twizzle</S.Title>
              <L.Vertical spaceAll={10}>
                <Checkbox onCheck={privacy.toggle} checked={privacy.value}>
                  I agree to the <Link href="privacy.html">Privacy Policy</Link>
                </Checkbox>
              </L.Vertical>
              <S.Button
                onClick={() => {
                  step.increase();
                }}
                disabled={!checked}
              >
                Proceed to Download
              </S.Button>
            </L.Vertical>
          )}

          {currentStep === STEPS.DOWNLOAD && (
            <L.Vertical spaceAll={20}>
              {clickedDownload.value && <S.Text>Downloading...</S.Text>}
              {!clickedDownload.value && (
                <S.Button
                  style={{ textDecoration: 'none', textAlign: 'center' }}
                  onClick={() => {
                    window.location.href = REACT_APP_DOWNLOAD_LINK;
                    clickedDownload.setTrue();
                  }}
                  disabled={!enableDownload}
                >
                  {downloadLabel}
                </S.Button>
              )}
              <L.Vertical spaceAll={15}>
                <S.Title> Other Products </S.Title>
                <ProductList />

                <S.Title>Support</S.Title>
                {hasSubscribed === false && (
                  <>
                    <L.Horizontal fulLW flex={1} spaceAll={15} centerV>
                      <S.Input style={{ flex: 1 }} {...email.eventBind} placeholder="Email address" />
                      <S.Button onClick={onSubscribe} disabled={disableSubscribe}>
                        {subscribing ? 'Subscribing...' : 'Subscribe'}
                      </S.Button>
                    </L.Horizontal>
                    <S.Text>
                      <S.Disclaimer>
                        Twizzle is free, but by signing up you'll support me by getting rare email updates
                        about my products 🙏 Absolutely no spam, and you can unsubscribe at any time 👌
                      </S.Disclaimer>
                    </S.Text>
                  </>
                )}
                {hasSubscribed === true && (
                  <S.Text>
                    <div>Thank you for the support 🙏</div>
                    <div>
                      You can also follow <Link href={twitterLink}>Twizzle on Twitter</Link> for more updates.
                    </div>
                  </S.Text>
                )}
              </L.Vertical>
            </L.Vertical>
          )}
        </L.Vertical>
      </Rodal>
    </S.Modal>
  );
};

export default DownloadModal;
