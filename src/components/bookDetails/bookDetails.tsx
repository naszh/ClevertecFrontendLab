import {
  AddressText,
  Author,
  BookAbout,
  BookAddress,
  BookContainer,
  BookInfo,
  Button,
  Description,
  Title,
  Text,
  TextBold,
  ImageWrap,
  ImageCover,
  BookSection,
  Separator,
  Rating,
  RatingContainer,
  Block,
  TableInfo,
  TextGray,
  TextLight,
  Feedback,
  FeedbackUser,
  User,
  UserText,
  Content,
  ButtonWidth,
  UserTextWrap,
} from './bookDetails.styled';
import BookCover from '../../assets/imgs/bookBig.png';
import { booksCards, booksCategories, Users } from '../../constants/data';
import { StarContainer } from '../content/content.styled';
import { switchCase } from '../content/content';

export const BookDetails = () => (
  <BookContainer>
    <BookAddress>
      <Content>
        <AddressText>{booksCategories[1].title}</AddressText>
        <AddressText>/</AddressText>
        <AddressText>{booksCards[0].title}</AddressText>
      </Content>
    </BookAddress>
    <BookInfo>
      <ImageWrap>
        <ImageCover src={BookCover} alt={`обложка книги ${booksCards[0].title}`} />
      </ImageWrap>
      <BookAbout>
        <Title>{booksCards[0].title}</Title>
        <Author>{booksCards[0].about}</Author>
        <Button>{booksCards[0].status}</Button>
      </BookAbout>
      <Description>
        <TextBold>О книге</TextBold>
        <Separator />
        <Text>
          Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
          кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
          изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
          время?
        </Text>
        <Text>
          Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
          алгоритмы — это веселое и увлекательное занятие.
        </Text>
      </Description>
    </BookInfo>
    <BookSection>
      <Block>
        <TextBold>Рейтинг</TextBold>
        <Separator />
        <Rating>
          <>
            <RatingContainer>{switchCase(booksCards[0].stars)}</RatingContainer>
          </>
          <TextBold>{booksCards[0].stars.count}</TextBold>
        </Rating>
      </Block>
      <Block>
        <TextBold>Подробная информация</TextBold>
        <Separator />
        <TableInfo>
          <TextGray>Издательство</TextGray>
          <Text>Питер</Text>
          <TextGray>Жанр</TextGray>
          <Text>Компьютерная литература</Text>
          <TextGray>Год издания</TextGray>
          <Text>2019</Text>
          <TextGray>Вес</TextGray>
          <Text>370 г</Text>
          <TextGray>Страниц</TextGray>
          <Text>288</Text>
          <TextGray>ISBN</TextGray>
          <Text>978-5-4461-0923-4</Text>
          <TextGray>Переплет</TextGray>
          <Text>Мягкая обложка</Text>
          <TextGray>Изготовитель</TextGray>
          <Text>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</Text>
          <TextGray>Формат</TextGray>
          <Text>70х100</Text>
        </TableInfo>
      </Block>
      <Block>
        <TextBold>
          Отзывы <TextLight>3</TextLight>
        </TextBold>
        <Separator />
        <Feedback>
          {Users.map((user) => (
            <FeedbackUser key={user.id}>
              <User>
                <div>
                  <img src={user.avatar} alt={`аватар пользователя ${user.name}`} />
                </div>
                <UserTextWrap>
                  <UserText>{user.name}</UserText>
                  <UserText>{user.date}</UserText>
                </UserTextWrap>
              </User>
              <StarContainer>{switchCase(user.stars)}</StarContainer>
              {user.comment && <Text>{user.comment}</Text>}
            </FeedbackUser>
          ))}
          <ButtonWidth>оценить книгу</ButtonWidth>
        </Feedback>
      </Block>
    </BookSection>
  </BookContainer>
);
