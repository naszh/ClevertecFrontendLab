import { booksCards } from '../../constants/data';
import { Star } from '../../constants/data.types';
import NoImg from '../../assets/icons/noimg.svg';
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
  ContentWrapperList,
  BookCardList,
  ImageWrapper,
  TitleList,
  BetweenCont,
  AvailableList,
  BookedList,
  UnavailableList,
  InfoWrapper,
  StarList,
  AboutList,
  CoverBookWrap,
} from './content.styled';

export const switchCase = (param: { star: Star; count: number }) => {
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

export const Content = () => {
  return (
    <ContentWrapper>
      {booksCards.map((card) => (
        <BookCard key={card.id} data-test-id='card'>
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
        </BookCard>
      ))}
    </ContentWrapper>
    // <ContentWrapperList>
    //   {booksCards.map((card) => (
    //     <BookCardList key={card.id} data-test-id='card'>
    //       <ImageWrapper>
    //         {card.cover ? (
    //           <CoverBook src={card.cover} alt={`обложка книги ${card.title}`} />
    //         ) : (
    //           <CoverBook src={NoImg} alt={`обложка книги отсутствует`} />
    //         )}
    //       </ImageWrapper>
    //       <InfoWrapper>
    //         <TitleList>{card.title}</TitleList>
    //         <AboutList>{card.about}</AboutList>
    //         <BetweenCont>
    //           {card.stars.count === 0 ? (
    //             <StarText>{card.stars.star.null}</StarText>
    //           ) : (
    //             <StarList>{switchCase(card.stars)}</StarList>
    //           )}
    //           {card.status === 'Забронировать' ? (
    //             <AvailableList>{card.status}</AvailableList>
    //           ) : card.status === 'Забронирована' ? (
    //             <BookedList>{card.status}</BookedList>
    //           ) : (
    //             <UnavailableList>{card.status}</UnavailableList>
    //           )}
    //         </BetweenCont>
    //       </InfoWrapper>
    //     </BookCardList>
    //   ))}
    // </ContentWrapperList>
  );
};
