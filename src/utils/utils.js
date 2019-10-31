export const onEnterAndClick = (cb) => {
  return {
    onClick: cb,
    onKeyPress: e => {
      if (e.which === 13 || e.which === 32) {
        cb && cb(e);
      }
    }
  };
};
