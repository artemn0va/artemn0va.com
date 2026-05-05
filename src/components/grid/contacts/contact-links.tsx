import Link from 'next/link';

import type { ContactIconId, ContactItem } from '@/content/home/types';
import { cn } from '@/lib/utils';

import EmailIcon from '~/svg/email.svg';
import GitHubIcon from '~/svg/github.svg';
import LinkedInIcon from '~/svg/linkedin.svg';
import WhatsAppIcon from '~/svg/whatsapp.svg';

interface ContactLinksProps {
  contacts: ContactItem[];
  isDialog?: boolean;
}

export default function ContactLinks({
  contacts,
  isDialog = false,
}: Readonly<ContactLinksProps>) {
  return (
    <ul
      className={cn('mx-auto flex gap-x-5', {
        'my-auto flex-col gap-y-5': isDialog,
      })}
    >
      {contacts.map((contact, index) => (
        <li key={index}>
          <ContactLink
            url={contact.url}
            iconId={contact.iconId}
            label={contact.label}
          />
        </li>
      ))}
    </ul>
  );
}

interface ContactLinkProps {
  url: string;
  iconId: ContactIconId;
  label: string;
}

function getContactIcon(iconId: ContactIconId) {
  switch (iconId) {
    case 'github':
      return <GitHubIcon className='w-[28px] h-[28px]' />;
    case 'linkedin':
      return <LinkedInIcon className='w-[22.75px] h-[22.75px]' />;
    case 'whatsapp':
      return <WhatsAppIcon className='w-[24px] h-[24px]' />;
    case 'email':
      return <EmailIcon className='w-[28px] h-[28px]' />;
  }
}

function ContactLink({ url, iconId, label }: Readonly<ContactLinkProps>) {
  return (
    <Link
      href={url}
      aria-label={label}
      target='_blank'
      className='bg-btn-outer-dark shadow-contacts-btn-outer-dark dark:bg-btn-outer dark:shadow-contacts-btn-outer p-1.5 rounded-full flex'
    >
      <div className='w-[46px] h-[46px] bg-btn-inner-dark shadow-contacts-btn-inner-dark dark:bg-page dark:shadow-contacts-btn-inner rounded-full flex justify-center items-center'>
        {getContactIcon(iconId)}
      </div>
    </Link>
  );
}
