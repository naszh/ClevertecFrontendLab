import { useParams } from 'react-router-dom';
import { booksCards } from '../../../constants/data';
import { switchCase } from '../../content/content';
import NoImg from '../../../assets/icons/noimg.svg';
import { NLink, CoverBook, StarText } from '../../content/content.styled';
import {
  ContentWrapperList,
  BookCardList,
  ImageWrapper,
  InfoWrapper,
  TitleList,
  AboutList,
  BetweenCont,
  StarList,
  AvailableList,
  BookedList,
  UnavailableList,
} from './listView.styled';

export const ListView = () => {
  const { category } = useParams();
  return (
    <ContentWrapperList>
      {booksCards.map((card) => (
        <BookCardList key={card.id} data-test-id='card'>
          <NLink to={`/books/${category}/${card.id}`}>
            <ImageWrapper>
              {card.cover ? (
                <CoverBook src={card.cover} alt={`обложка книги ${card.title}`} />
              ) : (
                <CoverBook src={NoImg} alt={`обложка книги отсутствует`} />
              )}
            </ImageWrapper>
            <InfoWrapper>
              <TitleList>{card.title}</TitleList>
              <AboutList>{card.about}</AboutList>
              <BetweenCont>
                {card.stars.count === 0 ? (
                  <StarText>{card.stars.star.null}</StarText>
                ) : (
                  <StarList>{switchCase(card.stars)}</StarList>
                )}
                {card.status === 'Забронировать' ? (
                  <AvailableList>{card.status}</AvailableList>
                ) : card.status === 'Забронирована' ? (
                  <BookedList>{card.status}</BookedList>
                ) : (
                  <UnavailableList>{card.status}</UnavailableList>
                )}
              </BetweenCont>
            </InfoWrapper>
          </NLink>
        </BookCardList>
      ))}
    </ContentWrapperList>
  );
};
