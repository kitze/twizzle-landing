import React, { useRef } from 'react';

import * as S from './styles';

function TweetCircle({ length, remaining }) {
  const ref = useRef();
  const radius = ref && ref.current && ref.current.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const tweetPercent = (100 * length) / 240;
  const offset = circumference - (tweetPercent / 100) * circumference;
  const circleSize = 25;

  const showRemainingText = remaining < 20;
  const hasRemaining = remaining > 0;
  let color = '#1da1f2';

  if (showRemainingText && hasRemaining) {
    color = '#ffad1f';
  } else if (remaining === 0) {
    color = '#e0245d';
  }

  return (
    <S.Circle>
      <S.ProgressRing width={circleSize} height={circleSize}>
        <svg height="100%" viewBox="0 0 20 20" width="100%">
          <circle cx="50%" cy="50%" fill="none" strokeWidth="2" r="9" stroke="#3D546660" />
          <circle
            ref={ref}
            cx="50%"
            cy="50%"
            fill="none"
            strokeWidth="2"
            r="9"
            stroke={color}
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference || 0,
              strokeDashoffset: offset || 0
            }}
          />
        </svg>
      </S.ProgressRing>
      {showRemainingText && <S.Text>{remaining}</S.Text>}
    </S.Circle>
  );
}

export default TweetCircle;
