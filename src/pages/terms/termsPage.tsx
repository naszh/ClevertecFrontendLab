import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Menu } from '../../components/menu/menu';
import { Terms } from '../../components/terms/terms';
import { MainContainer, SectionContainer } from '../main/mainPage.styled';

interface TermsPageProp {
  view: 'terms' | 'contract';
}

export const TermsPage = ({ view }: TermsPageProp) => (
  <>
    <Header />
    <MainContainer>
      <Menu />
      <SectionContainer>
        {view === 'terms' && <Terms text='Правила пользования' />}
        {view === 'contract' && <Terms text='Договор оферты' />}
      </SectionContainer>
    </MainContainer>
    <Footer />
  </>
);
