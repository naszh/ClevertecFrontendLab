import { ButtonsShow } from './buttonsShow/buttonsShow';
import { Filter } from './filter/filter';
import { Wrapper } from './navigation.styled';
import { Search } from './search/search';

export const Navigation = () => (
  <Wrapper>
    <Search />
    <Filter />
    <ButtonsShow />
  </Wrapper>
);
