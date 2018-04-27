import React from 'react';
import DeanSheet from './PrincipalSheet';
import { Container, Wrapper } from 'theme/Components';

const Wrap = Wrapper.extend`
  max-width: 800px;
`;

const dean = [
  {
    name: 'Prof. K.C.Tiwari',
    desingnation: 'Principle:CBPGEC',
    photo: '/dean.jpg',
    addressing: 'Dear Student,',
    para1:
      'At the very onset, I am prompted to use a John Dewey\'s quote: \'Education is not preparation for life; education is life itself\'',
    para2:
      'It is a matter of pride and immense pleasure that destiny has given me the opportunity to join CBPGEC family as its head. I take this opportunity to welcome new students choosing this college for their higher education in various programmes.',
    para3:
      'A popular adage, “I hear and I forget, I see and I remember, I do and I understand”, is very pertinent for Higher Technical Education System, so that students are able to imbibe theoretical concepts by performing related practicals. It is the education of our students\' heads, hearts and hands that will genuinely prepare them for success in college, career and civic life, I can say this with full confidence that the college would provide every student a much expected opportunity of boundless growth through an integrated structure of curricular, co-curricular and extracurricular activities',
    para4:
      ' Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime. Hence learning skills along with knowledge will enable our students not only to be seekers, but also job creators and emerge as global leaders in the area of technical education commensurate with the dynamic global scenario for the benefit of mankind. We wish to bring out the best in our students and prepare them to become competent enough to meet the challenges of the world.',
    para5:
      'Moving ahead on the path of excellence, the College is ready to effectively take up the forthcoming challenges in diversified domains.',
    para6:
      'I welcome you to this college, and assure you that we shall leave no stone unturned to equip you with best possible training and exposure so that you can shape up your career and growth for a challenging life.',
    para7:
      'I am sure that you will feel proud on being associated with us and make us equally proud with your academic excellence',
    quote: 'Jai Hind ! ',
  },
];

export default () => (
  <Container>
    <Wrap>{dean.map((item) => (<DeanSheet key={item.name} {...item} />))}</Wrap>
  </Container>
);
