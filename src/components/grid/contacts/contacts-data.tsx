import { ReactNode } from 'react';

import EmailIcon from '~/svg/email.svg';
import GitHubIcon from '~/svg/github.svg';
import LinkedInIcon from '~/svg/linkedin.svg';
import WhatsAppIcon from '~/svg/whatsapp.svg';

export type Contact = {
  url: string;
  icon: ReactNode;
  label: string;
};

const contactsData: Contact[] = [
  {
    url: 'https://github.com/artemn0va',
    icon: <GitHubIcon className='w-[28px] h-[28px]' />,
    label: 'GitHub',
  },
  {
    url: 'https://linkedin.com/in/artemn0va',
    icon: <LinkedInIcon className='w-[22.75px] h-[22.75px]' />,
    label: 'LinkedIn',
  },
  {
    url: 'https://wa.me/+972584441705',
    icon: <WhatsAppIcon className='w-[24px] h-[24px]' />,
    label: 'WhatsApp',
  },
  {
    url: 'mailto:helloartemnova@gmail.com',
    icon: <EmailIcon className='w-[28px] h-[28px]' />,
    label: 'Email',
  },
];

export default contactsData;
