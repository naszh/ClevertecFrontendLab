import { booksCategories } from '../../constants/data';
import { MenuContainer, LightText, ListItem, MenuList, MenuItem, ArrowUp, ArrowDown } from './menu.styled';

export const Menu = () => (
  <MenuContainer>
    <div>
      <MenuList>
        <ArrowUp>Витрина книг</ArrowUp>
        {/* <ArrowDown>Витрина книг</ArrowDown> */}
        {booksCategories.map((book) => (
          <ListItem key={book.id}>
            {book.title}
            <LightText>{book.count}</LightText>
          </ListItem>
        ))}
      </MenuList>
    </div>
    <MenuItem>Правила пользования</MenuItem>
    <MenuItem>Договор оферты</MenuItem>
  </MenuContainer>
);
