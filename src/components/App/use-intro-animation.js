import { useEffect, useState } from 'react';
import { usePose, useVisiblePose } from 'utils/hooks';
import { devAndProd } from 'utils/dev-prod';
import sequence from 'utils/sequence';

const useIntroAnimation = (showInDev = true) => {
  // poses
  const { pose: homePose, setPose: setHomePose } = usePose('hidden', ['hidden', 'middle', 'normal']);
  const [messagesPose, setMessagesPose] = useVisiblePose(false);
  const [fabPose, setFabPose] = useVisiblePose(false);
  const [menuBarPose, setMenubarPose] = useVisiblePose(false);
  const [isAnimationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    //always show animation in prod, but toggle it in dev
    const showAnimation = devAndProd(showInDev, true);

    if (showAnimation) {
      sequence([
        0,
        () => setHomePose('hiddenCenter'),
        500,
        () => setHomePose('middle'),
        500,
        () => setMessagesPose(true),
        1500,
        () => setHomePose('normal'),
        500,
        () => setFabPose(true),
        500,
        () => {
          setMenubarPose(true);
          setAnimationDone(true);
        }
      ]);
    } else {
      setMessagesPose(true);
      setHomePose('normal');
      setFabPose(true);
      setMenubarPose(true);
      setAnimationDone(true);
    }
  }, []);

  return {
    homePose,
    messagesPose,
    fabPose,
    menuBarPose,
    isAnimationDone
  };
};

export default useIntroAnimation;
