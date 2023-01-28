import { booksCards } from '../../constants/data';
import { Star } from '../../constants/data.types';
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
  StarContainer,
} from './content.styled';

export const Content = () => {
  const switchCase = (param: { star: Star; count: number }) => {
    switch (param.count) {
      case 1:
        return (
          <>
            <img src={param.star.star} alt='' />
            <img src={param.star.noStar} alt='' />
            <img src={param.star.noStar} alt='' />
            <img src={param.star.noStar} alt='' />
            <img src={param.star.noStar} alt='' />
          </>
        );
      case 2:
        return (
          <>
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.noStar} alt='' />
            <img src={param.star.noStar} alt='' />
            <img src={param.star.noStar} alt='' />
          </>
        );
      case 3:
        return (
          <>
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.noStar} alt='' />
            <img src={param.star.noStar} alt='' />
          </>
        );
      case 4:
        return (
          <>
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.noStar} alt='' />
          </>
        );
      case 5:
        return (
          <>
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
            <img src={param.star.star} alt='' />
          </>
        );
    }
  };

  return (
    <ContentWrapper>
      {booksCards.map((card) => (
        <BookCard key={card.id} data-test-id='card'>
          <div>
            <CoverBook src={card.cover} alt={`обложка книги ${card.title}`} />
          </div>
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
        </BookCard>
      ))}
    </ContentWrapper>
  );
};
