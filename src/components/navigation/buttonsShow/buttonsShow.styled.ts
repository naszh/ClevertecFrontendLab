import styled from 'styled-components';
import Plate from '../../../assets/imgs/square.png';
import List from '../../../assets/imgs/stroke.png';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
`;

export const ButtonPlate = styled.button`
  width: 38px;
  height: 38px;
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  box-shadow: 0px 2px 4px rgb(191 196 201 / 20%), 0px 3px 4px rgb(191 196 201 / 18%), 0px 1px 5px rgb(191 196 201 / 24%);
  border: none;
  border-radius: 50%;
  &::before {
    content: url(${Plate});
    vertical-align: -webkit-baseline-middle;
  }
`;

export const ButtonList = styled.button`
  width: 38px;
  height: 38px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgb(191 196 201 / 20%), 0px 3px 4px rgb(191 196 201 / 18%), 0px 1px 5px rgb(191 196 201 / 24%);
  border: none;
  border-radius: 50%;
  &::before {
    content: url(${List});
    vertical-align: -webkit-baseline-middle;
  }
`;
