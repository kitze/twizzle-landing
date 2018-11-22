export const grid = ({ cols = 3, columnGap = 0, rowGap = columnGap, gap = 0 } = {}) => {
  return {
    display: 'grid',
    rowGap: rowGap || gap,
    columnGap: columnGap || gap
  };
};

export const fixedSize = (width, height = width) => ({ width, height });

export const applyTheme = name => ({ theme }) => theme[name];

export const whenTheme = (name, val) => ({ theme }) => ({
  ...(theme.name === name && val)
});

export const hover = (hover = {}, active = {}, alternative = {}) => ({
  cursor: 'pointer',
  userSelect: 'none !important',
  '-webkit-tap-highlight-color': 'rgba(0,0,0,0) !important',
  '&:hover': hover,
  '&:active': active
});

export const getThemeColor = (name, p = 'color') => ({ theme }) => ({ [p]: theme.colors[name] });

export const when = (name, val, whenNot) => obj => ({
  ...(obj[name] && val),
  ...(!obj[name] && whenNot)
});

export const whenNot = (name, val) => obj => ({
  ...(!obj[name] && val)
});
