import styled from 'styled-components';
import Desc from '../../../assets/icons/sortdesc.svg';
import DescAct from '../../../assets/icons/sortdescact.svg';

export const FilterButton = styled.button`
  position: relative;
  width: 150px;
  height: 38px;
  border: none;
  border-radius: 599px;
  background: #ffffff;
  padding: 11px;
  color: #a7a7a7;
  cursor: pointer;
  &,
  &:active {
    box-shadow: 0px 2px 4px rgb(191 196 201 / 20%), 0px 3px 4px rgb(191 196 201 / 18%),
      0px 1px 5px rgb(191 196 201 / 24%);
  }
  &:active {
    background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }
  @media (max-width: 320px) {
    font-size: 0;
    width: 32px;
    height: 32px;
    padding: 0;
  }
`;

export const ButtonIcon = styled(FilterButton)`
  &::before {
    position: absolute;
    left: 8px;
    top: 12px;
    vertical-align: middle;
    @media (max-width: 320px) {
      top: 8px;
    }
  }
`;

export const ButtonDesc = styled(ButtonIcon)`
  &::before {
    content: url(${Desc});
  }
  &:active::before {
    content: url(${DescAct});
    left: 11px;
    @media (max-width: 320px) {
      top: 11px;
    }
  }
`;

export const ButtonAsc = styled(ButtonIcon)`
  &::before {
    content: url(${Desc});
    display: inline-block;
    transform: rotate(180deg);
    top: 8px;
    @media (max-width: 320px) {
      top: 0;
    }
  }
  &:active::before {
    content: url(${DescAct});
    top: 10px;
    left: 9px;
    @media (max-width: 320px) {
      top: 2px;
    }
  }
`;
