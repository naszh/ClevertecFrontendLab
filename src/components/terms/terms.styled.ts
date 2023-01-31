import styled from 'styled-components';

export const Header = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 32px;
  @media (max-width: 320px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

export const TermsList = styled.ol`
  counter-reset: num;
`;

export const TermsListItem = styled.li`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  counter-increment: num;
  margin-top: 16px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  &:before {
    content: counter(num) '. ';
    font-weight: 600;
  }
`;

export const TermsList2 = styled(TermsList)`
  display: flex;
  flex-direction: column;
  counter-reset: num2;
  padding-left: 30px;
`;

export const TermsListItem2 = styled(TermsListItem)`
  font-weight: 400;
  counter-increment: num2;
  &:not(:last-child) {
    margin-bottom: 0;
  }
  &:before {
    content: counter(num) '.' counter(num2) '. ';
    font-weight: 400;
  }
`;

export const TermsList3 = styled(TermsList2)`
  counter-reset: num3;
`;

export const TermsListItem3 = styled(TermsListItem2)`
  counter-increment: num3;
  &:before {
    content: counter(num) '.' counter(num2) '.' counter(num3) '. ';
  }
`;

export const TermsList4 = styled(TermsList3)`
  counter-reset: num4;
`;

export const TermsListItem4 = styled(TermsListItem3)`
  counter-increment: num4;
  &:before {
    content: counter(num) '.' counter(num2) '.' counter(num3) '.' counter(num4) '. ';
  }
`;
