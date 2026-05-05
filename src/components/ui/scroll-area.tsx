'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as React from 'react';

import { cn } from '@/lib/utils';

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    isThemeRevert?: boolean;
  }
>(({ className, children, isThemeRevert = false, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className='h-full w-full rounded-[inherit]'>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar isThemeRevert={isThemeRevert} />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > & {
    isThemeRevert?: boolean;
  }
>(
  (
    { className, orientation = 'vertical', isThemeRevert = false, ...props },
    ref,
  ) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        'flex touch-none select-none rounded-full bg-[rgba(229,233,240,0.68)] transition-colors shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.56),inset_2px_2px_5px_rgba(166,180,200,0.18)] dark:bg-[rgba(46,54,62,0.78)] dark:shadow-[inset_-2px_-2px_4px_rgba(88,98,107,0.16),inset_2px_2px_5px_rgba(35,40,45,0.34)]',
        orientation === 'vertical' &&
          'h-full w-3 border-l border-l-transparent p-[2px]',
        orientation === 'horizontal' &&
          'h-3 flex-col border-t border-t-transparent p-[2px]',
        {
          '2xl:bg-[rgba(46,54,62,0.78)] 2xl:shadow-[inset_-2px_-2px_4px_rgba(88,98,107,0.16),inset_2px_2px_5px_rgba(35,40,45,0.34)] 2xl:dark:bg-[rgba(229,233,240,0.68)] 2xl:dark:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.56),inset_2px_2px_5px_rgba(166,180,200,0.18)]':
            isThemeRevert,
        },
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(
          'relative flex-1 rounded-full bg-[rgba(174,184,197,0.88)] shadow-[-1px_-1px_2px_rgba(255,255,255,0.6),2px_2px_5px_rgba(166,180,200,0.3)] dark:bg-[rgba(129,141,153,0.82)] dark:shadow-[-1px_-1px_2px_rgba(88,98,107,0.14),2px_2px_5px_rgba(20,25,29,0.38)]',
          {
            '2xl:bg-[rgba(129,141,153,0.82)] 2xl:shadow-[-1px_-1px_2px_rgba(88,98,107,0.14),2px_2px_5px_rgba(20,25,29,0.38)] 2xl:dark:bg-[rgba(174,184,197,0.88)] 2xl:dark:shadow-[-1px_-1px_2px_rgba(255,255,255,0.6),2px_2px_5px_rgba(166,180,200,0.3)]':
              isThemeRevert,
          },
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  ),
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
