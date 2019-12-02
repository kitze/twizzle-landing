import React from 'react';
import * as S from './styles';
import { onEnterAndClick } from 'utils/utils';

function MenuBar({ className, pose, initialPose, selected, onClick, icons = [], mainIcon }) {
  return (
    <S.MenuBar className={className} pose={pose} initialPose={initialPose}>
      <S.Icons>
        <S.Item
          className="feather"
          selected={selected}
          role="button"
          tabIndex={0}
          {...onEnterAndClick(onClick)}
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
