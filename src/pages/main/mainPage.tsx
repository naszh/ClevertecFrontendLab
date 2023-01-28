import { Header } from '../../components/header/header';
import { Menu } from '../../components/menu/menu';
import { Navigation } from '../../components/navigation/navigation';

export const MainPage = () => (
  <>
    <Header />
    <div style={{ display: 'flex', gap: '6px' }}>
      <Menu />
      <div style={{ width: '75%' }}>
        <Navigation />
      </div>
    </div>
  </>
);
