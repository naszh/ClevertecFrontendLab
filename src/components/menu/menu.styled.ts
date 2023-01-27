import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 42px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ActiveTitle = styled.h2`
  display: flex;
  gap: 82px;
  font-size: 18px;
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  border-bottom: 1px solid transparent;
  border-image: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%) 1;
  width: 255px;
  border: none;
`;

export const MenuList = styled.ul``;

export const ArrowIcon = styled.img`
  visibility: hidden;
`;

export const ListItem = styled.li`
  margin: 0 0 16px 20px;
  font-size: 16px;
  &:first-of-type {
    margin-top: 24px;
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const LightText = styled.span`
  font-size: 14px;
  color: #a7a7a7;
  margin-left: 6px;
`;

export const MenuTitle = styled.h2`
  font-size: 18px;
`;
