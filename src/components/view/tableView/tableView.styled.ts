import styled from 'styled-components';

export const ContentWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  justify-content: center;
  gap: 24px 21.5px;
  @media (max-width: 768px) {
    gap: 32px 34px;
  }
`;

export const BookCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18.5px;
  padding: 8px 8px 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 10px;
  @media (max-width: 320px) {
    padding: 8px 16px 16px;
  }
`;

export const CoverBookWrap = styled.div`
  margin: 0 auto;
`;

export const StarContainer = styled.span`
  display: flex;
  gap: 8px;
  width: fit-content;
`;

export const Title = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 54px;
  overflow: hidden;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 700;
    -webkit-line-clamp: 2;
  }
  @media (max-width: 320px) {
    font-size: 14px;
    font-weight: 600;
    -webkit-line-clamp: 3;
  }
`;

export const About = styled.p`
  font-weight: 400;
  color: #727272;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 320px) {
    font-size: 12px;
    font-weight: 400;
    text-transform: none;
  }
`;

export const Booked = styled.button`
  height: 40px;
  background: #ffffff;
  border: 1px solid #bfc4c9;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: not-allowed;
`;

export const Available = styled(Booked)`
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const Unavailable = styled(Booked)`
  background: #f9f9fa;
  color: #a7a7a7;
`;
