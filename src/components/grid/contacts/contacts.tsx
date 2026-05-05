import ContactLinks from '@/components/grid/contacts/contact-links';
import Typography from '@/components/typography';
import contactsData from '@/content/home/contacts';

import Section from '@/layouts/section';

// TODO: Add tooltip for whatsapp with QR image

export default function Contacts() {
  return (
    <Section
      id='contacts'
      className='contacts bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark flex flex-col gap-y-4 rounded-xl px-5 pt-3.5 pb-8'
    >
      <Typography isThemeRevert variant='h2' size='sm'>
        Contacts
      </Typography>
      <ContactLinks contacts={contactsData} />
    </Section>
  );
}
