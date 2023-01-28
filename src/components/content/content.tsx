import { booksCards } from '../../constants/data';
import {
  About,
  BookCard,
  Available,
  ContentWrapper,
  StarText,
  Title,
  Booked,
  Unavailable,
  CoverBook,
} from './content.styled';

export const Content = () => (
  <ContentWrapper>
    {booksCards.map((card: any) => (
      <BookCard>
        <div>
          <CoverBook src={card.cover} alt='' />
        </div>
        {card.stars.null ? (
          <StarText>{card.stars.null}</StarText>
        ) : (
          <div>
            <span>{card.stars.star}</span>
            <span>{card.stars.star}</span>
            <span>{card.stars.star}</span>
            <span>{card.stars.star}</span>
            <span>{card.stars.star}</span>
          </div>
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
      </BookCard>
    ))}
  </ContentWrapper>
);
