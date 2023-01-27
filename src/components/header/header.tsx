import Logo from '../../assets/imgs/logo.png';
import Burger from '../../assets/imgs/burger.png';
import Avatar from '../../assets/imgs/avatar.png';
import { BurgerIcon, HeaderContainer, LogoImg, Profile, ProfileAvatar, Text, Title } from './header.styled';

export const Header = () => (
  <HeaderContainer>
    <LogoImg src={Logo} alt='logo Cleverland' />
    <BurgerIcon src={Burger} alt='icon action for menu' />
    <Title>Библиотека</Title>
    <Profile>
      <Text>Привет, Иван!</Text>
      <ProfileAvatar src={Avatar} alt='profile' />
    </Profile>
  </HeaderContainer>
);
