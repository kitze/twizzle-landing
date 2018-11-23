import React from 'react';
import * as S from './styles';

function MenuBar({ src, className, pose, initialPose, selected, children, onClick, icons = [], mainIcon }) {
  return (
    <S.MenuBar className={className} pose={pose} initialPose={initialPose}>
      <S.Icons>
        <S.Item
          className="feather"
          selected={selected}
          onClick={onClick}
          role="button"
          tabIndex={0}
          onKeyPress={e => {
            if (e.which === 13 || e.which === 32) {
              onClick(e);
            }
          }}
        >
          <S.Icon icon={mainIcon} />
        </S.Item>
        {icons.map((icon, key) => (
          <S.Item key={key}>
            {typeof icon !== 'string' ? <S.Icon icon={icon} /> : <S.Text>{icon}</S.Text>}
          </S.Item>
        ))}
      </S.Icons>
    </S.MenuBar>
  );
}

export default MenuBar;
