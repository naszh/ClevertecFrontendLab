import { Content } from '../../components/content/content';
import { Header } from '../../components/header/header';
import { Menu } from '../../components/menu/menu';
import { Navigation } from '../../components/navigation/navigation';
import { SectionContainer } from './mainPage.styled';

export const MainPage = () => (
  <>
    <Header />
    <main style={{ display: 'flex', gap: '6px' }}>
      <Menu />
      <SectionContainer>
        <Navigation />
        <Content />
      </SectionContainer>
    </main>
  </>
);
