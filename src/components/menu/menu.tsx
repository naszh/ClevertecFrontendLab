import { booksCategories } from '../../constants/data';
import Arrow from '../../assets/imgs/arrow.png';
import { MenuContainer, ArrowIcon, LightText, ListItem, MenuList, MenuItem } from './menu.styled';

export const Menu = () => (
  <MenuContainer>
    <div>
      <MenuList>
        <MenuItem>
          Витрина книг
          <ArrowIcon src={Arrow} />
        </MenuItem>
        {booksCategories.map((book) => (
          <ListItem>
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
