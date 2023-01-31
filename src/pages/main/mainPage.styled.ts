import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  gap: 6px;
  flex-grow: 1;
`;

export const SectionContainer = styled.section`
  width: 75%;
  @media (max-width: 768px) {
    width: 83.3%;
    margin: auto;
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`;
