import React from 'react';
import styled from 'styled-components';
import { ButtonLink, HR } from 'theme/Components';
import media from 'theme/media';

const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
`;
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const WrapperEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.phone`
    justify-content: ${({ center }) => (center ? 'center' : 'flex-end')};
  `};
`;

const Item = styled.p`
  font-family: 'Open Sans', sans-serif;
  padding: 20px 0px;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  word-wrap: break-word;
  hyphens: auto;
`;

export default ({ education }) => (
  <div>
    <Wrapper>
      <Title>Education</Title>
      {education.map((elem) => <Item key={elem}>{elem}</Item>)}
    </Wrapper>
    <WrapperEnd>
      <ButtonLink to="/teacher/addeducation">Update</ButtonLink>
    </WrapperEnd>
    <HR />
  </div>
);
