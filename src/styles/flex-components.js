import styled from 'styled-components';
import flex from './flex';

const margin = {
  horizontal: 'marginRight',
  vertical: 'marginBottom'
};

const common = direction => p => ({
  ...(p.spaceBetween && flex.spaceBetween),
  ...(p.spaceAround && flex.spaceAround),
  ...(p.justifyEnd && flex.justifyEnd),
  ...(p.flex && {
    flex: p.flex
  }),
  ...(p.spaceFirst && {
    '& :first-child': {
      [margin[direction]]: p.spaceFirst
    }
  }),
  ...(p.spaceAll && {
    '& > *': {
      [margin[direction]]: p.spaceAll
    },
    '& > *:last-child': {
      [margin[direction]]: 0
    }
  }),
  ...(p.styles && p.styles)
});

export const Horizontal = styled('div')(
  ({ center, centerV, centerH }) => ({
    ...flex.horizontal,
    ...(center && flex.centerHorizontal),
    ...(centerV && flex.centerHorizontalV),
    ...(centerH && flex.centerHorizontalH)
  }),
  common('horizontal')
);

export const Vertical = styled('div')(
  ({ center, centerV, centerH }) => ({
    ...flex.vertical,
    ...(center && flex.centerVertical),
    ...(centerV && flex.centerVerticalV),
    ...(centerH && flex.centerVerticalH)
  }),
  common('vertical')
);
