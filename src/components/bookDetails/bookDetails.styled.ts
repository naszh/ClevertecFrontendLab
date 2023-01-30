import styled from 'styled-components';
import { AvailableList, StarContainer } from '../content/content.styled';

export const BookContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 42px;
  @media (max-width: 768px) {
    width: 83.3%;
    margin: auto;
  }
  @media (max-width: 570px) {
    width: 100%;
    padding: 16px;
    gap: 20px;
  }
`;

export const BookAddress = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  padding: 20px 0;
  background: #f9f9fa;
  // margin-left: calc(50% - 50vw);
  // margin-right: calc(50% - 50vw);
`;

export const Content = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 570px) {
    padding: 0 16px;
  }
`;

export const AddressText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #a7a7a7;
  &:nth-child(2) {
    padding: 3px 8px;
    font-weight: 600;
    color: #bfc4c9;
  }
`;

export const BookInfo = styled.article`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: min-content;
  }
  @media (max-width: 570px) {
    display: block;
  }
`;

export const ImageWrap = styled.div`
  grid-row-start: span 2;
  width: 445px;
  @media (max-width: 1024px) {
    width: 360px;
  }
  @media (max-width: 768px) {
    grid-row-start: auto;
    width: 136px;
  }
  @media (max-width: 570px) {
    width: 188px;
    margin: 0 auto 16px;
  }
`;

export const ImageCover = styled.img`
  @media (max-width: 768px) {
    height: 198px;
  }
  @media (max-width: 570px) {
    height: 260px;
  }
`;

export const BookAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 62px;
  @media (max-width: 768px) {
    margin-bottom: 48px;
    gap: 32px;
  }
  @media (max-width: 570px) {
    margin-bottom: 42px;
    gap: 8px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media (max-width: 570px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const Author = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #a7a7a7;
  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
  @media (max-width: 570px) {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 34px;
  }
`;

export const Button = styled(AvailableList)`
  width: 350px;
  height: 52px;
  border-radius: 30px;
  font-size: 16px;
  @media (max-width: 768px) {
    width: 306px;
  }
  @media (max-width: 570px) {
    font-size: 12px;
    width: 100%;
  }
`;

export const ButtonWidth = styled(Button)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    grid-column-start: span 2;
  }
  @media (max-width: 570px) {
    gap: 16px;
    margin-bottom: 26px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 570px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const TextBold = styled(Text)`
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 570px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const BookSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 62px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Separator = styled.div`
  width: 350px;
  border-bottom: 1px solid #ebebeb;
  @media (max-width: 768px) {
    width: 305px;
  }
  @media (max-width: 570px) {
    width: 100%;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const RatingContainer = styled(StarContainer)`
  @media (max-width: 570px) {
    gap: 15px;
    height: 27px;
  }
`;

export const TableInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 3fr;
  row-gap: 16px;
  @media (max-width: 570px) {
    grid-template-columns: 0.8fr 1fr;
  }
`;

export const TextGray = styled(Text)`
  font-weight: 600;
  color: #a7a7a7;
`;

export const TextLight = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #a7a7a7;
`;

export const Feedback = styled.section`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 65%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FeedbackUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const User = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 570px) {
    gap: 18px;
    align-items: center;
  }
`;

export const UserTextWrap = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 570px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const UserText = styled(TextLight)`
  font-size: 16px;
  color: #727272;
`;
