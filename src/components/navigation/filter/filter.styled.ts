import styled from 'styled-components';
import Icon from '../../../assets/imgs/filter.png';

export const FilterButton = styled.button`
  width: 150px;
  height: 38px;
  border: none;
  border-radius: 599px;
  box-shadow: 0px 2px 4px rgb(191 196 201 / 20%), 0px 3px 4px rgb(191 196 201 / 18%), 0px 1px 5px rgb(191 196 201 / 24%);
  background: #ffffff;
  color: #a7a7a7;
  &::before {
    content: url(${Icon});
    padding-right: 8px;
    vertical-align: middle;
    @media (max-width: 320px) {
      margin-left: 10px;
      vertical-align: text-top;
    }
  }
  @media (max-width: 320px) {
    font-size: 0;
    width: 32px;
    height: 32px;
    padding: 0;
  }
`;
