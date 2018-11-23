import React from 'react';

function Icon({ icon: Icon, className, style, onClick }) {
  return <Icon className={className} style={style} onClick={onClick} />;
}

export default Icon;
