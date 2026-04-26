import Link from 'next/link';

import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export default function Copyright({ className }: Readonly<Props>) {
  return (
    <Link
      href='https://github.com/artemn0va'
      target='_blank'
      className={cn(
        'text-sm text-[#A5A9B0] max-w-max hover:underline',
        className
      )}
    >
      © 2026 Ɐrtem Nova
    </Link>
  );
}
