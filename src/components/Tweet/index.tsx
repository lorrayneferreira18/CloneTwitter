import React from 'react';

import { Container, 
    RetweetTweet,
    IconTT, 
    Body, 
    Avatar,
    Content, 
    Header, 
    Description, 
    ImageContent, 
    Dot, 
    Icons, 
    Status, 
    CommentIcon, 
    RetweetIcon, 
    LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
  <Container>
    <RetweetTweet>
      <IconTT/>
      Você retweetou

    </RetweetTweet>
    <Body>
      <Avatar/>
      <Content>
        <Header>
          <strong>Anitta</strong>
          <span>@anitta</span>
          <Dot/>
          <time>06 de março</time>
        </Header>
        <Description>Vamos que vamos</Description>
        <ImageContent/>
        <Icons>
          <Status>
            <CommentIcon/>
            23
          </Status>
          <Status>
            <RetweetIcon/>
            12
          </Status>
          <Status>
            <LikeIcon/>
            50
          </Status>
        </Icons>
      </Content>
    </Body>
  </Container>
    );
}

export default Tweet;