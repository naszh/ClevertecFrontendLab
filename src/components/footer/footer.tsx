import { SocialIcons } from '../../constants/data';
import { Container, IconsList, Text } from './footer.styled';

export const Footer = () => (
  <Container>
    <Text>© 2020-2023 Cleverland. Все права защищены.</Text>
    <IconsList>
      {SocialIcons.map((icon) => (
        <li key={icon.id}>
          <img src={icon.icon} alt={`logo of ${icon.name}`} />
        </li>
      ))}
    </IconsList>
  </Container>
);
