import styled from 'styled-components';
import Icon from '../../../assets/imgs/search.png';

export const SearchInput = styled.input`
  width: 350px;
  height: 38px;
  padding-left: 40px;
  border: none;
  border-radius: 599px;
  box-shadow: 0px 2px 4px rgb(191 196 201 / 20%), 0px 3px 4px rgb(191 196 201 / 18%), 0px 1px 5px rgb(191 196 201 / 24%);
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 274px;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;

export const SearchButton = styled.button`
  display: none;
  @media (max-width: 320px) {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 2px 4px rgb(191 196 201 / 20%), 0px 3px 4px rgb(191 196 201 / 18%),
      0px 1px 5px rgb(191 196 201 / 24%);
    background: #ffffff;
    color: #a7a7a7;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  &::before {
    content: url(${Icon});
    position: absolute;
    z-index: 1;
    top: 11px;
    left: 15px;
    @media (max-width: 320px) {
      top: 8px;
      left: 8px;
    }
  }
`;
