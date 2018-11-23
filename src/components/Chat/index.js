import React, { useState, useRef, useEffect } from 'react';
import { useInput } from 'react-hanger';
import plane from '../../icons/plane.svg';
import * as S from './styles';
import { PoseGroup } from 'react-pose';

function Chat({initialMount, user: { name, username, messages: defaultMessages } }) {
  const [messages, setMessagges] = useState(defaultMessages);
  const newMessage = useInput('');
  const messagesRef = useRef();

  const sendMessage = () => {
    setMessagges([
      ...messages,
      {
        message: newMessage.value,
        sender: true,
        added: true
      }
    ]);
    newMessage.clear();
  };

  useEffect(
    () => {
      messagesRef.current.scrollTop = 999999;
    },
    [messages.length]
  );

  const onKeyPress = e => {
    if (e.key === 'Enter' && newMessage.hasValue) {
      sendMessage();
    }
  };

  return (
    <S.Chat>
      <S.Bar>
        <S.Name href={`https://twitter.com/${username}`} rel="noopener" target="_blank">
          {name} (@{username})
        </S.Name>
      </S.Bar>
      <S.Content>
        <S.Messages innerRef={messagesRef}>
          <PoseGroup animateOnMount={true}>
            {messages.map((m, index) => (
              <S.Message
                initialMount={initialMount}
                added={m.added}
                index={index}
                {...m.url && {
                  href: m.url,
                  rel: 'noopener',
                  target: '_blank'
                }}
                alternate={m.sender}
                key={`${username}.${m.message}`}
              >
                {m.message}
              </S.Message>
            ))}
          </PoseGroup>
        </S.Messages>

        <S.InputWrap>
          <S.Input
            autoFocus={true}
            onKeyPress={onKeyPress}
            {...newMessage.bindToInput}
            placeholder="Type here.."
          />
          <S.SendButton disabled={!newMessage.hasValue} onClick={sendMessage}>
            <S.SendIcon icon={plane} />
          </S.SendButton>
        </S.InputWrap>
      </S.Content>
    </S.Chat>
  );
}

export default Chat;
