export const breakpoints = {
  large: 1030,
  medium: 850,
  phone: 450
};

export const smaller = width => `@media screen and (max-width: ${width}px)`;
export const smallerHeight = height => `@media screen and (max-height: ${height}px)`;
export const widerThan = width => `@media screen and (min-width: ${width}px)`;

export const isHorizontal = smaller(769);
