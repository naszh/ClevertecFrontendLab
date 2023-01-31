import { BookDetails } from '../../components/bookDetails/bookDetails';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { MainContainer } from '../main/mainPage.styled';

export const BookPage = () => (
  <>
    <Header />
    <MainContainer>
      <BookDetails />
    </MainContainer>
    <Footer />
  </>
);
