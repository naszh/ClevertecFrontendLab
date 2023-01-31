import { Dispatch, SetStateAction } from 'react';
import { ButtonsShow } from './buttonsShow/buttonsShow';
import { Filter } from './filter/filter';
import { Wrapper } from './navigation.styled';
import { Search } from './search/search';

interface NavigationProps {
  changeView: Dispatch<SetStateAction<'table' | 'list'>>;
  viewTable: boolean;
}

export const Navigation = ({ changeView, viewTable }: NavigationProps) => (
  <Wrapper>
    <Search />
    <Filter />
    <ButtonsShow view={changeView} isTable={viewTable} />
  </Wrapper>
);
