import styled from 'styled-components';
import { whiteish } from 'styled-mixins';

export const Modal = styled.div({
  '.rodal-dialog': {
    backgroundColor: '#1f212f',
    color: 'white',
    height: '500px !important'
  },
  '.rodal-mask': {
    backgroundColor: 'rgba(0, 0, 0, 0.77)'
  }
});
export const Input = styled.input({
  fontSize: 18,
  padding: 10,
  border: 'none',
  outline: 'none',
  borderRadius: 5,
  backgroundColor: whiteish(0.1),
  color: 'white',
  '::placeholder': {
    color: whiteish(0.3)
  }
});

export const Disclaimer = styled.div({
  fontSize: 14,
  lineHeight: '16px',
  color: whiteish(0.7)
});

export const Text = styled.div({});

export const Button = styled.button(
  {
    color: 'white',
    backgroundColor: whiteish(0.1),
    border: 'none',
    outline: 'none',
    padding: 10,
    borderRadius: 5,
    transition: 'all 100ms linear',
    cursor: 'pointer'
  },
  ({ disabled }) => ({
    ...(disabled && {
      opacity: 0.5,
      cursor: 'not-allowed'
    }),
    ...(!disabled && {
      '&:hover': {
        backgroundColor: whiteish(0.2)
      }
    })
  })
);

export const Title = styled.div({
  fontSize: 20
});
