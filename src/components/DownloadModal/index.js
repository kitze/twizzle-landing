import React, { lazy, Suspense } from 'react';
import Rodal from 'rodal';
import { useBoolean, useInput } from 'react-hanger';
import isemail from 'isemail';

//styles
import 'rodal/lib/rodal.css';
import * as S from './styles';
import * as L from 'layout-styled-components';
import ProductList from '../ProductList';

//lazy
const Confetti = lazy(() => import('react-dom-confetti'));

const confettiConfig = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 90,
  decay: 0.9
};

const DownloadModal = ({ onClose }) => {
  const email = useInput('');
  const isValid = email.hasValue && isemail.validate(email.value, { minDomainAtoms: 2 });
  const showConfetti = useBoolean(false);

  const onDownload = async () => {
    await new Promise(resolve => {
      resolve(true);
    }, 1000);
    showConfetti.setTrue();
  };

  return (
    <S.Modal>
      <Rodal onClose={onClose} visible={true}>
        <L.Vertical spaceAll={13}>
          <Suspense fallback={null}>
            <div style={{ position: 'relative', left: 180, top: 500 }}>
              <Confetti active={showConfetti.value} config={confettiConfig} />
            </div>
          </Suspense>
          {!showConfetti.value && (
            <>
              <S.Title>Download Twizzle</S.Title>
              <S.Input autoFocus {...email.eventBind} placeholder="Email address" />
              <S.Text>
                <S.Disclaimer>
                  Twizzle is free, but by signing up you'll support us by getting rare email updates about our
                  products 🙏 No spam, ever!
                </S.Disclaimer>
              </S.Text>
              <S.Button onClick={onDownload} disabled={!isValid}>
                Download Twizzle
              </S.Button>
            </>
          )}
          {showConfetti.value.value && <div>Thank you!</div>}
          <S.Title>Our products</S.Title>
          <ProductList />
        </L.Vertical>
      </Rodal>
    </S.Modal>
  );
};

export default DownloadModal;
