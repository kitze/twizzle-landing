import * as L from 'layout-styled-components';
import $Checkbox from 'react-simple-checkbox';
import React from 'react';

const Checkbox = ({ children, checked, onCheck }) => {
  return (
    <L.Horizontal centerV spaceAll={10}>
      <$Checkbox
        style={{ position: 'relative', top: 0 }}
        onChange={onCheck}
        color={'#636588'}
        size={3}
        checked={checked}
        type="checkbox"
      />
      <div
        onClick={e => {
          if (e.target.type !== 'A') {
            onCheck();
          }
        }}
        style={{ lineHeight: '14px', cursor: 'pointer', fontSize: 15 }}
      >
        {children}
      </div>
    </L.Horizontal>
  );
};

export default Checkbox;
