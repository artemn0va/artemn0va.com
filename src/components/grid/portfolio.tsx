'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import Typography from '@/components/typography';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';

import Section from '@/layouts/section';

const imageSizes = '(min-width: 1440px) 306px, (min-width: 768px) 622px, 238px';
const imageFrameClassName = 'relative h-full w-full overflow-hidden';
const imageBackgroundClassName =
  'absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-95 saturate-125 dark:brightness-75';
const imageForegroundClassName =
  'relative h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(35,40,45,0.22)]';

type PortfolioSlide = {
  alt: string;
  width: number;
  height: number;
} & (
  | {
      src: string;
      themeSrc?: never;
    }
  | {
      src?: never;
      themeSrc: {
        light: string;
        dark: string;
        darkWidth: number;
        darkHeight: number;
      };
    }
);

const portfolioSlides: PortfolioSlide[] = [
  {
    alt: 'Refframe interface',
    width: 2550,
    height: 1397,
    themeSrc: {
      light: '/images/swiper/refframe-light.webp',
      dark: '/images/swiper/refframe-dark.webp',
      darkWidth: 1920,
      darkHeight: 1192,
    },
  },
  {
    alt: 'Refframe landing page',
    src: '/images/swiper/refframe-landing.webp',
    width: 2543,
    height: 1396,
  },
  {
    alt: 'Widegamut interface',
    src: '/images/swiper/widegamut.webp',
    width: 1920,
    height: 1080,
  },
  {
    alt: 'Widegamut landing page',
    src: '/images/swiper/widegamut-landing.webp',
    width: 2550,
    height: 1394,
  },
  {
    alt: 'MDB interface',
    src: '/images/swiper/mdb.webp',
    width: 2540,
    height: 1383,
  },
  {
    alt: 'Nadia website',
    src: '/images/swiper/nadia.webp',
    width: 2543,
    height: 1397,
  },
  {
    alt: 'Ultracube website',
    src: '/images/swiper/ultracube.webp',
    width: 2553,
    height: 1394,
  },
  {
    alt: 'Artboxshop website',
    src: '/images/swiper/artboxshop.webp',
    width: 2540,
    height: 1402,
  },
];

export default function Portfolio() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Section
        id='portfolio'
        className='swiper bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark min-h-full min-w-full flex flex-col outline outline-transparent rounded-xl pt-3.5 pb-5'
      >
        <Typography isThemeRevert variant='h2' size='sm' className='pl-5'>
          Latest Work
        </Typography>
        <Carousel
          className='w-full h-full flex flex-col'
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className='-ml-0 pt-4 pb-7'>
            {portfolioSlides.map((slide, index) => {
              return (
                <CarouselItem key={index} className={cn('pl-0 basis-auto')}>
                  <Card
                    className={cn(
                      'w-[238px] h-[238px] md:w-[622px] md:h-[622px] 2xl:w-[306px] 2xl:h-[306px] overflow-hidden transition-transform duration-300 bg-page shadow-section-outer dark:bg-section-dark dark:shadow-section-outer-dark',
                      {
                        'scale-[.828] md:scale-[.9] 2xl:scale-[.88]':
                          current !== index + 1,
                      },
                    )}
                  >
                    <CardContent className='flex aspect-square items-center justify-center p-0'>
                      {slide.themeSrc ? (
                        <div className={imageFrameClassName}>
                          <Image
                            src={slide.themeSrc.light}
                            alt=''
                            width={slide.width}
                            height={slide.height}
                            sizes={imageSizes}
                            className={cn(
                              imageBackgroundClassName,
                              'dark:hidden',
                            )}
                            aria-hidden='true'
                          />
                          <Image
                            src={slide.themeSrc.dark}
                            alt=''
                            width={slide.themeSrc.darkWidth}
                            height={slide.themeSrc.darkHeight}
                            sizes={imageSizes}
                            className={cn(
                              imageBackgroundClassName,
                              'hidden dark:block',
                            )}
                            aria-hidden='true'
                          />
                          <Image
                            src={slide.themeSrc.light}
                            alt={slide.alt}
                            width={slide.width}
                            height={slide.height}
                            sizes={imageSizes}
                            className={cn(
                              imageForegroundClassName,
                              'dark:hidden',
                            )}
                          />
                          <Image
                            src={slide.themeSrc.dark}
                            alt={slide.alt}
                            width={slide.themeSrc.darkWidth}
                            height={slide.themeSrc.darkHeight}
                            sizes={imageSizes}
                            className={cn(
                              imageForegroundClassName,
                              'hidden dark:block',
                            )}
                          />
                        </div>
                      ) : (
                        <div className={imageFrameClassName}>
                          <Image
                            src={slide.src}
                            alt=''
                            width={slide.width}
                            height={slide.height}
                            sizes={imageSizes}
                            className={imageBackgroundClassName}
                            aria-hidden='true'
                          />
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={slide.width}
                            height={slide.height}
                            sizes={imageSizes}
                            className={imageForegroundClassName}
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselDots className='absolute inset-x-0 bottom-0' />
        </Carousel>
      </Section>
    </>
  );
}
