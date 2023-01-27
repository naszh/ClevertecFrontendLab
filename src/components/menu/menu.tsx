import { booksCategories } from '../../constants/data';
import Arrow from '../../assets/imgs/arrow.png';
import { MenuContainer, ActiveTitle, ArrowIcon, LightText, ListItem, MenuList, MenuTitle } from './menu.styled';

export const Menu = () => (
  <MenuContainer>
    <div>
      <ActiveTitle>
        Витрина книг
        <ArrowIcon src={Arrow} />
      </ActiveTitle>
      <MenuList>
        {booksCategories.map((book) => (
          <ListItem>
            {book.title}
            <LightText>{book.count}</LightText>
          </ListItem>
        ))}
      </MenuList>
    </div>
    <MenuTitle>Правила пользования</MenuTitle>
    <MenuTitle>Договор оферты</MenuTitle>
  </MenuContainer>
);
