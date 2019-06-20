import React from 'react';

//hooks
import { useRouter } from 'react-tiniest-router';
import { useDelay } from 'utils/hooks';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';

//graphql
import { GetLicenseQuery } from 'api/queries';
import { useQuery } from 'react-graphql-request';

const { REACT_APP_DOWNLOAD_LINK } = process.env;

const spaceBetween = 3;

const CheckoutPage = () => {
  const {
    params: { checkoutId }
  } = useRouter();

  const done = useDelay(1300);
  const { data, loading, retry } = useQuery(GetLicenseQuery, { start: done, variables: { checkoutId } });
  const isLoading = loading || !done;

  return (
    <S.CheckoutPage>
      {isLoading && <div>Getting license...</div>}
      {!isLoading &&
        (() => {
          const { payment } = data;
          const hasLicense = payment && payment.license;
          if (!hasLicense) {
            return (
              <S.LicenseWrap>
                <S.Text>Cannot retrieve license :(</S.Text>
                <A.Space size={spaceBetween}/>
                <S.RetryButton onClick={retry}>Try again</S.RetryButton>
              </S.LicenseWrap>
            );
          } else {
            return (
              <S.LicenseWrap>
                <S.Text>Your license code is:</S.Text>
                <A.Space size={spaceBetween} />
                <S.License
                  autocomplete="off"
                  autocorrect="off"
                  autocapitalize="off"
                  readonly
                  spellcheck="false"
                  onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
                  type="text"
                  defaultValue={payment.license.id}
                />
                <A.Space size={spaceBetween} />
                <S.DownloadButton href={REACT_APP_DOWNLOAD_LINK} target="_blank" rel="noopener">
                  Download Twizzy
                </S.DownloadButton>
              </S.LicenseWrap>
            );
          }
        })()}
    </S.CheckoutPage>
  );
};

export default CheckoutPage;
