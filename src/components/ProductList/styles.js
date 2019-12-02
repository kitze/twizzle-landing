import styled from 'styled-components';
import { size, whiteish } from 'styled-mixins';

export const Logo = styled.img({
  borderRadius: '100%',
  ...size(30)
});

export const Product = styled.a({
  backgroundColor: whiteish(0.05),
  borderRadius: 10,
  padding: '10px 15px',
  transition: 'all 50ms linear',
  textDecoration: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: whiteish(0.08),
    transform: 'scale(1.01)'
  }
});

export const Name = styled.div({
  fontSize: 18,
  lineHeight: '22px'
});

export const Description = styled.div({
  fontSize: 14,
  lineHeight: '18px',
  color: whiteish(0.9)
});
