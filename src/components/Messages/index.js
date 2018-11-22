import React from 'react';

//data
import users from 'data/users';

//icons
import faMoon from '../../icons/moon-inv.svg';
import faBars from '../../icons/list-small.svg';
import faCog from '../../icons/cog.svg';
import faFeather from '../../icons/feather.svg';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';

//components
import { PoseGroup } from 'react-pose';

function Messages({ messagesPose, fabPose }) {
  return (
    <S.Messages>
      <S.Bar>
        <S.Title> Messages </S.Title>
        <A.Horizontal spaceAll={10}>
          <S.Icon icon={faMoon} />
          <S.Icon icon={faBars} />
          <S.Icon icon={faCog} />
        </A.Horizontal>
      </S.Bar>
      <S.List>
        <PoseGroup animateOnMount={true}>
          {users.map(({ name, img, username, message, time }, index) => {
            const clickable = ['thekitze', 'sizzyapp', 'twizzyapp', 'jsui_app'].includes(username);
            return (
              <S.Message.Wrap
                {...clickable && {
                  clickable: true,
                  href: `https://twitter.com/${username}`,
                  target: '_blank',
                  rel: 'noopener'
                }}
                clickable={clickable}
                index={index}
                key={name}
              >
                <S.Message.Avatar src={img} />
                <S.Message.Mid>
                  <A.Horizontal flex={1} centerV spaceAll={5}>
                    <S.Message.Name>{name}</S.Message.Name>
                    <S.Message.Username>@{username}</S.Message.Username>
                  </A.Horizontal>
                  <S.Message.Message>{message}</S.Message.Message>
                </S.Message.Mid>
                <S.Message.Time>{time}</S.Message.Time>
              </S.Message.Wrap>
            );
          })}
        </PoseGroup>
      </S.List>
      <S.MessageFab />
      <S.Fab initialPose="hide" pose={fabPose}>
        <S.Icon fill="white" icon={faFeather} />
      </S.Fab>
    </S.Messages>
  );
}

export default Messages;
