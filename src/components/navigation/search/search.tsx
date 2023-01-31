import { IconContainer, SearchButton, SearchInput } from './search.styled';

export const Search = () => (
  <IconContainer>
    <SearchInput type='search' placeholder='Поиск книги или автора…' />
    <SearchButton />
  </IconContainer>
);
