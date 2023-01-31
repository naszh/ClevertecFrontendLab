import styled from 'styled-components';
import { About, StarContainer, Booked, Available, Unavailable } from '../tableView/tableView.styled';

export const ContentWrapperList = styled.section`
  display: grid;
  gap: 16px;
`;

export const BookCardList = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: 675px) {
    gap: 8px;
    padding: 16px 8px;
  }
`;

export const ImageWrapper = styled.div`
  width: 120px;
  flex: 0 0 auto;
  @media (max-width: 320px) {
    width: 70px;
  }
  @media (max-width: 675px) {
    width: 90px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
`;

export const TitleList = styled.p`
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 675px) {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
  }
  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
  }
`;

export const AboutList = styled(About)`
  font-size: 16px;
  white-space: pre-wrap;
  @media (max-width: 675px) {
    font-size: 12px;
  }
`;

export const BetweenCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 675px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const StarList = styled(StarContainer)`
  height: 23px;
  @media (max-width: 320px) {
    height: 16px;
  }
`;

export const BookedList = styled(Booked)`
  width: 174px;
  @media (max-width: 320px) {
    width: -webkit-fill-available;
  }
`;

export const AvailableList = styled(Available)`
  width: 174px;
  @media (max-width: 320px) {
    width: -webkit-fill-available;
  }
`;

export const UnavailableList = styled(Unavailable)`
  width: 174px;
  @media (max-width: 320px) {
    width: -webkit-fill-available;
  }
`;
