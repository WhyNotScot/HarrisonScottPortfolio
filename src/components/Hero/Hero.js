import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm <br />
          Harrison Scott
        </SectionTitle>
        <SectionText>
        I am a recent graduate from Texas State University looking to explore new opportunities, and technologies.
        </SectionText>
        <Button onClick={() => window.location = 'https://mail.google.com/mail/?view=cm&source=mailto&to=[hcscott22@gmail.com]'}>Email Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
