import styled from 'styled-components';
import Plate from '../../../assets/icons/squaregr.svg';
import PlateAct from '../../../assets/icons/square.svg';
import List from '../../../assets/icons/stroke.svg';
import ListAct from '../../../assets/icons/strokewh.svg';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
`;

export const Button = styled.button`
  position: relative;
  width: 38px;
  height: 38px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgb(191 196 201 / 20%), 0px 3px 4px rgb(191 196 201 / 18%), 0px 1px 5px rgb(191 196 201 / 24%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:active {
    background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
    box-shadow: 0px 2px 4px rgb(191 196 201 / 20%), 0px 3px 4px rgb(191 196 201 / 18%),
      0px 1px 5px rgb(191 196 201 / 24%);
  }
  @media (max-width: 320px) {
    width: 32px;
    height: 32px;
  }
`;

export const ButtonPlate = styled(Button)`
  &::before {
    content: url(${Plate});
    position: absolute;
    top: 11px;
    right: 11px;
    @media (max-width: 320px) {
      top: 8px;
      right: 8px;
    }
  }
  &&:active::before {
    content: url(${PlateAct});
  }
`;

export const ButtonList = styled(Button)`
  &::before {
    content: url(${List});
    position: absolute;
    top: 9px;
    right: 8px;
    @media (max-width: 320px) {
      top: 6px;
      right: 6px;
    }
  }
  &&:active::before {
    content: url(${ListAct});
  }
`;
