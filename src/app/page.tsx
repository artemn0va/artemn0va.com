import '@/lib/env';

import Copyright from '@/components/copyright';
import Bio from '@/components/grid/bio/bio';
import Contacts from '@/components/grid/contacts/contacts';
import Cv from '@/components/grid/cv';
import Experience from '@/components/grid/experience/experience';
import Portfolio from '@/components/grid/portfolio';
import Profile from '@/components/grid/profile/profile';
import Projects from '@/components/grid/projects';
import Showcases from '@/components/grid/showcases/showcases';
import Skills from '@/components/grid/skills/skills';
import Template from '@/components/grid/template';
import Years from '@/components/grid/years';

import Header from '@/layouts/header';
import Section from '@/layouts/section';

export default function HomePage() {
  return (
    <div className='max-w-max mx-auto flex flex-col gap-y-6 px-3 py-[36px] md:px-6 2xl:p-0'>
      <Section className='grid-main 2xl:px-[60px] 2xl:py-9 relative'>
        <Header />

        <div className='hidden 2xl:block bg-page-dark dark:bg-page shadow-divider dark:shadow-divider-dark absolute top-0 right-[calc(100%-508px)] bottom-0 left-[calc((100vw-100%)/-2)] rounded-r-[24px] overflow-hidden -z-10' />
        <div className='hidden 2xl:block divider -z-20' />

        <Profile />
        <Bio />
        <Experience />

        <Skills />
        <Cv />
        <Years />
        <Projects />
        <Contacts />

        <Portfolio />
        <Showcases />

        <Template />
      </Section>

      <Copyright className='2xl:hidden' />
    </div>
  );
}

// TODO: Add a <Head> to the page
// <Head>
//   <title>Hi</title>
// </Head>
