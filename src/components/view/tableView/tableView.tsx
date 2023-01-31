import { useParams } from 'react-router-dom';
import { booksCards } from '../../../constants/data';
import { switchCase } from '../../content/content';
import NoImg from '../../../assets/icons/noimg.svg';
import { NLink, CoverBook, StarText } from '../../content/content.styled';
import {
  ContentWrapper,
  BookCard,
  CoverBookWrap,
  StarContainer,
  Title,
  About,
  Available,
  Booked,
  Unavailable,
} from './tableView.styled';

export const TableView = () => {
  const { category } = useParams();
  return (
    <ContentWrapper>
      {booksCards.map((card) => (
        <BookCard key={card.id} data-test-id='card'>
          <NLink to={`/books/${category}/${card.id}`}>
            <CoverBookWrap>
              {card.cover ? (
                <CoverBook src={card.cover} alt={`обложка книги ${card.title}`} />
              ) : (
                <CoverBook src={NoImg} alt={`обложка книги отсутствует`} />
              )}
            </CoverBookWrap>
            {card.stars.count === 0 ? (
              <StarText>{card.stars.star.null}</StarText>
            ) : (
              <StarContainer>{switchCase(card.stars)}</StarContainer>
            )}
            <Title>{card.title}</Title>
            <About>{card.about}</About>
            {card.status === 'Забронировать' ? (
              <Available>{card.status}</Available>
            ) : card.status === 'Забронирована' ? (
              <Booked>{card.status}</Booked>
            ) : (
              <Unavailable>{card.status}</Unavailable>
            )}
          </NLink>
        </BookCard>
      ))}
    </ContentWrapper>
  );
};
