import Logo from '../../assets/imgs/logo.png';
import Burger from '../../assets/icons/menu.svg';
import Avatar from '../../assets/imgs/avatar.png';
import { BurgerIcon, HeaderContainer, LogoImg, Profile, ProfileAvatar, Text, Title } from './header.styled';
import { Link } from 'react-router-dom';

export const Header = () => (
  <HeaderContainer>
    <Link to='/'>
      <LogoImg src={Logo} alt='logo Cleverland' />
    </Link>
    <BurgerIcon src={Burger} alt='icon action for menu' />
    <Title>Библиотека</Title>
    <Profile>
      <Text>Привет, Иван!</Text>
      <ProfileAvatar src={Avatar} alt='profile' />
    </Profile>
  </HeaderContainer>
);
