import { format } from 'date-fns';
import { useState, useEffect } from 'react';

export const useCanHover = () => {
  //assume that if device is smaller than 500 there's no hover, but actually check it on the first touch event
  const [canHover, setCanHover] = useState(window.innerWidth > 500);
  useEffect(() => {
    //mobile devices also emit a "mousemove" on every touch (#theplatform<3), but desktop devices don't emit "touchstart"
    let eventName = 'touchstart';
    window.addEventListener(
      eventName,
      function onFirstTouch() {
        setCanHover(false);
        window.removeEventListener(eventName, onFirstTouch, false);
      },
      false
    );
  }, []);
  return canHover;
};

export const useHovered = () => {
  const [hovering, setHovering] = useState(false);
  const canHover = useCanHover();

  return {
    value: hovering,
    setValue: setHovering,
    bind: canHover
      ? {
          onMouseOver: () => setHovering(true),
          onMouseLeave: () => setHovering(false)
        }
      : {
          onClick: () => setHovering(h => !h)
        }
  };
};

export const useToggleBodyClass = (val, [on, off]) => {
  useEffect(() => {
    document.body.classList.remove(val ? off : on);
    document.body.classList.add(val ? on : off);
  });
};

export const useVisiblePose = initial => {
  let visible = 'visible';
  let hidden = 'hidden';
  const { setPose, pose, ...rest } = usePose(initial ? visible : hidden, [hidden, visible]);
  return [pose, v => setPose(v ? visible : hidden), rest];
};

export const useGoogleAnalytics = (id, startLoading) => {

  useEffect(
    () => {
      if (!id) {
        return;
      }

      if (startLoading) {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        document.body.appendChild(script);
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          window.dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', id, {
          anonymize_ip: true,
          cookie_expires: 0
        });
      }
    },
    [startLoading]
  );
};

export const usePose = (initial, poses = {}) => {
  const [pose, setPose] = useState(initial);
  return { pose, setPose, poses };
};

export const useFindElementCenter = elementRef => {
  const [windowSize, setWindowSize] = useState();
  useEffect(() => {
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = elementRef.current;
    setWindowSize({
      x: window.innerWidth / 2 - offsetWidth / 2 - offsetLeft,
      y: window.innerHeight / 2 - offsetHeight / 2 - offsetTop
    });
  }, []);
  return windowSize;
};

export const useMousePosition = shouldTrack => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canHover = useCanHover();

  useEffect(
    () => {
      if (canHover && shouldTrack) {
        const handler = ({ clientX, clientY }) => {
          setMousePosition({
            x: clientX,
            y: clientY
          });
        };
        window.document.addEventListener('mousemove', handler);
        return () => window.document.removeEventListener('mousemove', handler);
      }
    },
    [canHover, shouldTrack]
  );

  return canHover ? mousePosition : {};
};

export const useClock = () => {
  const getCurrentTime = () => format(new Date(), 'ddd h:mm A');
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const t = setInterval(() => setTime(getCurrentTime()), 1000);

    return () => clearInterval(t);
  }, []);

  return time;
};

export const useOnPageLoad = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    window.onload = () => setLoaded(true);
  }, []);
  return loaded;
};

export const useScript = props => useLoadScript(props);

export const useLoadScript = ({ startLoading, src }) => {
  const [state, setState] = useState({
    ready: false,
    error: null
  });

  useEffect(
      () => {
        if (startLoading) {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => setState({ ready: true, error: null });
          script.onerror = error => setState({ ready: false, error });
          document.body.appendChild(script);
        }
      },
      [startLoading]
  );

  return state;
};

export const useDelay = int => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, int)
  }, []);
  return done;
}