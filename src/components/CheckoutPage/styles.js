import styled from 'styled-components';
import {Button} from 'components/BuyButton/styles';

export const CheckoutPage = styled.div({
  color: 'white',
  padding: 20,
  fontSize: 18
});

export const LinkButton = Button.withComponent('a');

export const RetryButton = styled(Button)({});

export const DownloadButton = styled(LinkButton)({
  textDecoration: 'none'
});

export const Text = styled.div({});

export const License = styled.input({
  maxWidth: 300,
  borderRadius: 5,
  width: '100%',
  padding: 10,
  fontSize: 18,
  outline: 'none',
  backgroundColor: `rgba(255,255,255,0.15)`,
  border: 'none',
  color: 'white'
});

export const LicenseWrap = styled.div({

});
