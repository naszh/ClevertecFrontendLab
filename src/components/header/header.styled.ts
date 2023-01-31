import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin: 32px 0 62px;
  @media (max-width: 768px) {
    margin-bottom: 54px;
  }
  @media (max-width: 320px) {
    margin: 24px 0 32px;
  }
`;

export const LogoImg = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerIcon = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-left: 64px;
  }
  @media (max-width: 320px) {
    width: 24px;
    margin-left: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-left: 120px;
  @media (max-width: 768px) {
    margin-left: 24px;
  }
  @media (max-width: 675px) {
    font-size: 24px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.p`
  display: inline-block;
`;

export const ProfileAvatar = styled.img`
  width: 58px;
  height: 58px;
`;
