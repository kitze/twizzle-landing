const margin = {
  horizontal: 'marginRight',
  vertical: 'marginBottom'
};

export const flex = {
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  centerHorizontal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  horizontalReverse: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  verticalReverse: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  noWrap: {
    flexWrap: 'nowrap'
  },
  centerHorizontalH: {
    justifyContent: 'center'
  },
  centerHorizontalV: {
    alignItems: 'center'
  },
  centerVertical: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerVerticalH: {
    alignItems: 'center'
  },
  centerVerticalV: {
    justifyContent: 'center'
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  alignStart: {
    alignContent: 'flex-start'
  },
  stretchSelf: {
    alignSelf: 'stretch'
  },
  spaceChildren: (space, direction = 'horizontal') => ({
    '& > *': {
      [margin[direction]]: space
    },
    '& > *:last-child': {
      [margin[direction]]: 0
    }
  })
};

export default flex;
