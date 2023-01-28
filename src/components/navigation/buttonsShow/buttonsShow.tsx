import { ButtonContainer, ButtonList, ButtonPlate } from './buttonsShow.styled';

export const ButtonsShow = () => (
  <ButtonContainer>
    <ButtonPlate data-test-id='button-menu-view-window'></ButtonPlate>
    <ButtonList data-test-id='button-menu-view-list'></ButtonList>
  </ButtonContainer>
);
