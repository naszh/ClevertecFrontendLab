import { Content } from '../../components/content/content';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Menu } from '../../components/menu/menu';
import { Navigation } from '../../components/navigation/navigation';
import { MainContainer, SectionContainer } from './mainPage.styled';

export const MainPage = () => (
  <>
    <Header />
    <MainContainer>
      <Menu />
      <SectionContainer>
        <Content />
      </SectionContainer>
    </MainContainer>
    <Footer />
  </>
);
