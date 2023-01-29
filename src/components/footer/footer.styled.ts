import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin-top: 62px;
  border-top: 1px solid #bfc4c9;
  padding: 16px 0;
  @media (max-width: 768px) {
    width: 83.3%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 320px) {
    width: 90%;
    margin-top: 24px;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 8px;
  }
`;

export const Text = styled.small`
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 320px) {
    font-size: 15px;
    text-align: center;
    width: 65%;
    margin: auto;
  }
`;

export const IconsList = styled.ul`
  display: flex;
  gap: 24px;
  @media (max-width: 320px) {
    justify-content: center;
  }
`;
