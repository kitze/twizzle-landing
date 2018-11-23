import React from 'react';
import { usePrevious } from 'react-hanger';

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
import Chat from 'components/Chat';

function Messages({ messagesPose, setSelectedUser, selectedUser, fabPose }) {
  const prevUser = usePrevious(selectedUser);
  const initialUser = prevUser === undefined && !!selectedUser;

  return (
    <S.Messages>
      <A.Horizontal flex={1}>
        <A.Vertical style={{ position: 'relative' }}>
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
              {users.map((user, index) => {
                const { name, img, username, message, time } = user;
                const clickable = user.messages && user.messages.length > 0;

                return (
                  <S.Message.Wrap
                    selected={selectedUser && selectedUser.username === username}
                    clickable={clickable}
                    onClick={() => clickable && setSelectedUser(user)}
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
        </A.Vertical>
        <PoseGroup>
          {selectedUser && (
            <S.ChatWrap key="chatwrap">
              <Chat initialMount={initialUser} key={selectedUser.username} user={selectedUser} />
            </S.ChatWrap>
          )}
        </PoseGroup>
      </A.Horizontal>
    </S.Messages>
  );
}

export default Messages;
