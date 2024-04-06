import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, Lacation, CakeIcon, Followage , EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Lorrayne Ferreira</h1>
        <h2>@lorrayne_ferreiraaa</h2>
        <p>
          Desenvolvedora <a href="https://github.com/lorrayneferreira18?tab=repositories">GitHub</a>
        </p>
        <ul>
          <li>
           <Lacation/>
           Minas Gerais, Brasil 
          </li>
          <li>
           <CakeIcon/>
           Nascida em 28 de maio de 2002
          </li>
        </ul>
        <Followage>
          <span>
            seguindo<strong>59</strong>
          </span>
          <span>
          <strong>75</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    <Feed/>
    </Container>
  )
}

export default ProfilePage;