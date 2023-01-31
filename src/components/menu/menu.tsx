import { NavLink, useLocation, useParams } from 'react-router-dom';
import { booksCategories } from '../../constants/data';
import { MenuContainer, LightText, ListItem, MenuList, MenuItem, ArrowUp, ArrowDown } from './menu.styled';

export const Menu = () => {
  const { category = 'all' } = useParams();
  const { pathname } = useLocation();
  return (
    <MenuContainer>
      <MenuList>
        <ArrowUp>
          <NavLink to={`/books/${category}`} className={({ isActive }) => (isActive ? ' pas active act' : ' pas')}>
            Витрина книг
          </NavLink>
        </ArrowUp>
        {/* <ArrowDown>Витрина книг</ArrowDown> */}
        {booksCategories.map((book) => (
          <ListItem key={book.id}>
            <NavLink to={`/books/${book.link}`}>
              {book.title}
              <LightText>{book.count}</LightText>
            </NavLink>
          </ListItem>
        ))}
      </MenuList>
      <NavLink to='/terms'>
        <MenuItem>Правила пользования</MenuItem>
      </NavLink>
      <NavLink to='/contract'>
        <MenuItem>Договор оферты</MenuItem>
      </NavLink>
    </MenuContainer>
  );
};
