import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//  Styled-default Components
import { Container, Flex } from 'theme/Components';
import media from 'theme/media';

// Icons SVG
// import { FBIconSVG, TwitterIconSvg, IGIconSVG } from './IconSvg';

const Background = styled.div`
  background: #181818;
`;

const Card = styled.div`
  flex: 1;
  padding: 25px;
`;

const InnerCard1 = styled.div`
  display: flex;
  ${media.phone`
    flex-direction: column;
  `};
`;

const InnerCard2 = styled.div`
  flex: 1;
`;

const H3 = styled.h3`
  font-family: 'Alegreya Sans', sans-serif;
  color: #b7b7b7;
  font-size: 30px;
`;

const A = styled.a`
  color: #a9a9a9;
  text-decoration: none;
  font-family: 'Alegreya Sans', sans-serif;
  padding: 1px 1px 3px 1px;
  margin: 10px 0px 0px 15px;
  display: inline-block;
  transition: color 0.02s cubic-bezier(0.4, 0.18, 0.76, 0.34);
  position: relative;
  z-index: 10;
  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5%;
    width: 100%;
    background: rgba(239, 239, 239, 0.56);
    z-index: -1;
    transition: height 0.1s;
  }
  &:hover {
    color: black;
    &:after {
      height: 100%;
      background: #efefef;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #a9a9a9;
  text-decoration: none;
  font-family: 'Alegreya Sans', sans-serif;
  padding: 1px 1px 3px 1px;
  margin: 10px 0px 0px 15px;
  display: inline-block;
  transition: color 0.02s cubic-bezier(0.4, 0.18, 0.76, 0.34);
  position: relative;
  z-index: 10;
  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5%;
    width: 100%;
    background: rgba(239, 239, 239, 0.56);
    z-index: -1;
    transition: height 0.1s;
  }
  &:hover {
    color: black;
    &:after {
      height: 100%;
      background: #efefef;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 0px 20px 0px;
`;

const ButtonLink = styled(Link)`
  right: 0;
  text-decoration: none;
  color: #a9a9a9;
  font-family: 'Alegreya Sans', sans-serif;
  border: solid 0.5px #a9a9a9;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 3px;
  transition: all 0.1s ease;
  &:hover {
    color: #efefef;
    border: solid 0.5px #efefef;
  }
`;

const link = {
  ip: 'http://ipu.ac.in',
  nptel: 'https://onlinecourses.nptel.ac.in/',
  scholarships: 'https://scholarships.gov.in/',
  gn: '/public/assets/delhi_gazette',
  dtte:
    'http://www.delhi.gov.in/wps/wcm/connect/DOIT_TT/training+and+technical+education/home',
  gh: 'https://github.com/',
  hr: 'https://hackerrank.com',
  loan: 'https://www.vidyalakshmi.co.in/Students/',
  md: 'http://gecdelhi.ac.in/pdf_files/Mandatory%20Disclosure%202014-15.pdf',
};

const RelatedLinks = () => (
  <Card>
    <H3>Related Links</H3>
    <InnerCard1>
      <InnerCard2>
        <A href={link.ip} target="_blank">
          University
        </A>
        <br />
        <A href={link.nptel} target="_blank">
          NPTEL
        </A>
        <br />
        <A href={link.gn} target="_blank">
          Gazzette Notifications
        </A>
        <br />
        <A href={link.scholarships} target="_blank">
          National Scholarships Portal
        </A>
        <br />
        <A href={link.dtte} target="_blank">
          DTTE
        </A>
        <br />
      </InnerCard2>
      <InnerCard2>
        <A href={link.gh} target="_blank">
          Github
        </A>
        <br />
        <A href={link.hr} target="_blank">
          Hackerrank
        </A>
        <br />
        <A href={link.loan} target="_blank">
          Education Loans
        </A>
      </InnerCard2>
    </InnerCard1>
  </Card>
);

const HelpfullLinks = () => (
  <Card>
    <H3>Helpfull Links</H3>
    <InnerCard1>
      <InnerCard2>
        <StyledLink to="/regulationOnRagging">
          Regulations On Ragging
        </StyledLink>
        <br />
        <A href={link.md} target="_blank">
          Mandatory Disclosure (File)
        </A>
        <br />
        <StyledLink to="/formsAndPerforma">Forms & Performa</StyledLink>
        <br />
        <StyledLink to="budgetreport">Budget Report</StyledLink>
        <br />
        <StyledLink to="/disclaimer">Disclaimer</StyledLink>
        <br />
        <StyledLink to="/tender">Tenders</StyledLink>
      </InnerCard2>
      <InnerCard2>
        <StyledLink to="/location">Location</StyledLink>
        <br />
        <StyledLink to="/credits">Credits</StyledLink>
        <br />
        <StyledLink to="/committee">Committee</StyledLink>
        <br />
        <StyledLink to="/contactus">Contact Us</StyledLink>
        <br />
        <StyledLink to="/rti">RTI</StyledLink>
      </InnerCard2>
    </InnerCard1>
  </Card>
);

// const Files = () => (
//   <Card>
//     <H3>Files</H3>
//     <InnerCard1>
//       <InnerCard2>
//         <A href={link.md} target="_blank">
//           Mandatory Disclosure
//         </A>
//       </InnerCard2>
//     </InnerCard1>
//   </Card>
// );

const FlexWrapper = Flex.extend`
  ${media.phone`
    flex-direction: column;
  `};
`;

export default ({ admin }) => (
  <Background>
    <Container>
      <FlexWrapper>
        <RelatedLinks />
        <HelpfullLinks />
        {/* <Files /> */}
      </FlexWrapper>
      <Wrapper>
        {!admin && <ButtonLink to="/admin/login">Admin Login</ButtonLink>}
      </Wrapper>
    </Container>
  </Background>
);
