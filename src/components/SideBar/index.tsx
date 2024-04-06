import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Olha só que bacana"
            elements={[
              <FollowSuggestion
                name="Anitta"
                nickname="@Anitta"
              />,
              <FollowSuggestion
               name="Luiza Sonsa"
               nickname="@luizinha" />,
              <FollowSuggestion
                name="Zeze de Camargo"
                nickname="@zazinho_camargo"
              />,
            ]}
          />
          <List
            title="Tealvez te interesse"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;