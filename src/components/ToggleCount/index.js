import React, { useEffect, lazy, useState, Suspense } from 'react';
import getText from './get-text';

//styles
import * as S from './styles';

//components
import { Hover } from 'styles/shared-components';

//lazy
const Confetti = lazy(() => import('react-dom-confetti'));

const confettiConfig = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 90,
  decay: 0.9
};

function ToggleCount({ count, onTweet }) {

  const initialLimit = count >= 5;
  const text = getText(count, initialLimit);

  const [showConfetti, setConfetti] = useState(false);

  useEffect(
    () => {
      if (count === 100) {
        setConfetti(true);
      }
    },
    [count]
  );


  return (
    initialLimit && (
      <S.ToggleCount>
        <Suspense fallback={null}>
          <Confetti active={showConfetti} config={confettiConfig} />
        </Suspense>
        <div>{text}</div>
        <div>
          <b>{count}</b> times so far!
        </div>
        <br />
        <div>
          <Hover onClick={onTweet}> Tweet progress </Hover>
        </div>
      </S.ToggleCount>
    )
  );
}

export default ToggleCount;
