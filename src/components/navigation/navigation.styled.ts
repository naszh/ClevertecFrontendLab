import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
  @media (max-width: 320px) {
    margin-bottom: 16px;
  }
`;
