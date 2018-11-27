import React from 'react';

function Icon({ icon: Icon, className, style, onClick, role, tabIndex, onKeyPress }) {
  return <Icon className={className} style={style} onClick={onClick} {...{ role, tabIndex, onKeyPress }} />;
}

export default Icon;
