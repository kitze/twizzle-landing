import React from 'react';
import delay from 'delay';

import { LoadScript } from 'components/LoadScript';
import * as S from './styles';

//icons
import faDownload from '../../icons/download.svg';
import { isDev } from 'utils/dev-prod';
import { GetLicenseQuery } from '../../api/queries';
import { graphQLClient } from '../../api/client';
import useRouter from '../Router/use-router';
import { routes } from '../../config/routes';

//env
const { REACT_APP_PADDLE_VENDOR, REACT_APP_PADDLE_PRODUCT_ID } = process.env;

const canBuyInDev = true;

function BuyButton({ startLoading }) {
  const { openPage } = useRouter();

  const buy = async () => {
    if (isDev) {
      openPage(routes.checkout);
      return null;
      if (canBuyInDev === false) {
        return alert('Buying app...');
      }
    }

    if (window) {
      const { Paddle } = window;
      await Paddle.Setup({ vendor: parseInt(REACT_APP_PADDLE_VENDOR) });
      Paddle.Checkout.open({
        product: parseInt(REACT_APP_PADDLE_PRODUCT_ID),
        allowQuantity: false,
        quantity: 1,
        successCallback: async result => {
          console.log('result', result);
          const { checkout } = result;
          console.log('checkout', checkout.completed, checkout.id);
          if (checkout.completed) {
            await delay(1000);
            try {
              const { payment } = await graphQLClient.request(GetLicenseQuery, {
                checkoutId: checkout.id
              });
              if (payment && payment.license) {
                console.log('payment.license.id', payment.license.id);
                alert(`Your license is --> ${payment.license.id}`);
              } else {
                console.error('No license found ...');
              }
            } catch (err) {
              console.error(err);
            }
          }
        }
      });
    }
  };

  return (
    <LoadScript startLoading={startLoading} src="https://cdn.paddle.com/paddle/paddle.js">
      {ready => (
        <S.Button
          disabled={!ready}
          onClick={ready ? buy : null}
          role="button"
          tabIndex={0}
          onKeyPress={e => {
            if ((e.which === 13 || e.which === 32) && ready) {
              buy(e);
            }
          }}
        >
          <S.AppleIcon icon={faDownload} />
          <span>Buy now</span>
        </S.Button>
      )}
    </LoadScript>
  );
}

export default BuyButton;
