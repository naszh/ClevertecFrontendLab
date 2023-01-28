import { SocialIcons } from '../../constants/data';
import { Container, IconsList, Text } from './footer.styled';

export const Footer = () => (
  <Container>
    <Text>© 2020-2023 Cleverland. Все права защищены.</Text>
    <IconsList>
      {SocialIcons.map((icon) => (
        <li>{icon.name}</li>
      ))}
    </IconsList>
  </Container>
);
