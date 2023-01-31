import { Button, ButtonContainer, ButtonImg } from './buttonsShow.styled';
import Plate from '../../../assets/icons/squaregr.svg';
import PlateAct from '../../../assets/icons/square.svg';
import List from '../../../assets/icons/stroke.svg';
import ListAct from '../../../assets/icons/strokewh.svg';
import { Dispatch, SetStateAction } from 'react';

interface ButtonsShowProps {
  view: Dispatch<SetStateAction<'table' | 'list'>>;
  isTable: boolean;
}

export const ButtonsShow = ({ view, isTable }: ButtonsShowProps) => (
  <ButtonContainer>
    <Button
      data-test-id='button-menu-view-window'
      type='button'
      onClick={() => {
        view('table');
      }}
    >
      <ButtonImg src={isTable ? PlateAct : Plate} alt='view image' />
    </Button>
    <Button
      data-test-id='button-menu-view-list'
      type='button'
      onClick={() => {
        view('list');
      }}
    >
      <ButtonImg src={isTable ? ListAct : List} alt='view image' />
    </Button>
  </ButtonContainer>
);
