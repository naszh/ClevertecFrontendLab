import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-left: auto;
`;

export const Button = styled.button`
  // display: contents;
  cursor: pointer;
  background: none;
  border: none;
`;

export const ButtonImg = styled.img`
  @media (max-width: 320px) {
    width: 39px;
    height: 40px;
  }
`;
