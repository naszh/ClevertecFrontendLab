import styled from 'styled-components';
import Up from '../../assets/icons/upfocus.svg';
import Down from '../../assets/icons/downfocus.svg';

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 25%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuList = styled.ul``;

export const MenuItem = styled.p`
  font-size: 18px;
  font-weight: 700;
  width: 255px;
  padding-bottom: 8px;
  line-height: 28px;
  border-bottom: 1px solid transparent;
  &:first-child {
    border-bottom: 1px solid;
  }
  &::after {
    vertical-align: sub;
    visibility: hidden;
  }
  &:hover::after {
    visibility: visible;
    margin-left: 82px;
  }
  &:hover,
  &:active {
    background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    border-bottom: 1px solid transparent;
    border-image: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%) 1;
  }
`;

export const ArrowUp = styled(MenuItem)`
  &::after {
    content: url(${Up});
  }
`;

export const ArrowDown = styled(MenuItem)`
  &::after {
    content: url(${Down});
  }
`;

export const ListItem = styled.li`
  margin: 0 0 16px 20px;
  font-size: 16px;
  &:first-of-type {
    margin-top: 24px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &:hover {
    color: #ff5253;
  }
  &:active {
    font-weight: 700;
    background: linear-gradient(233.73deg, #f83600 -16.08%, #f9d423 327.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const LightText = styled.span`
  font-size: 14px;
  color: #a7a7a7;
  margin-left: 6px;
`;
