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
const imageQuality = 80;
const imageFrameClassName = 'relative h-full w-full overflow-hidden';
const imageForegroundClassName =
  'portfolio-slide-image object-cover object-top drop-shadow-[0_12px_24px_rgba(35,40,45,0.22)]';

type PortfolioSlide = {
  alt: string;
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
      };
    }
);

const portfolioSlides: PortfolioSlide[] = [
  {
    alt: 'Refframe interface',
    themeSrc: {
      light:
        'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/refframe-light.webp',
      dark:
        'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/refframe-dark.webp',
    },
  },
  {
    alt: 'Refframe landing page',
    src: 'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/refframe-landing.webp',
  },
  {
    alt: 'Widegamut interface',
    src: 'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/widegamut.webp',
  },
  {
    alt: 'Widegamut landing page',
    src: 'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/widegamut-landing.webp',
  },
  {
    alt: 'MDB interface',
    src: 'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/mdb.webp',
  },
  {
    alt: 'Nadia website',
    src: 'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/nadia.jpg',
  },
  {
    alt: 'Ultracube website',
    src: 'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/ultracube.webp',
  },
  {
    alt: 'Artboxshop website',
    src: 'https://refframe-spaces.nyc3.cdn.digitaloceanspaces.com/artemn0va/swiper/artboxshop.webp',
  },
];

function PortfolioSlideImage({ slide }: Readonly<{ slide: PortfolioSlide }>) {
  return slide.themeSrc ? (
    <div className={imageFrameClassName}>
      <Image
        fill
        src={slide.themeSrc.light}
        alt={slide.alt}
        sizes={imageSizes}
        quality={imageQuality}
        className={cn(imageForegroundClassName, 'dark:hidden')}
      />
      <Image
        fill
        src={slide.themeSrc.dark}
        alt={slide.alt}
        sizes={imageSizes}
        quality={imageQuality}
        className={cn(imageForegroundClassName, 'hidden dark:block')}
      />
    </div>
  ) : (
    <div className={imageFrameClassName}>
      <Image
        fill
        src={slide.src}
        alt={slide.alt}
        sizes={imageSizes}
        quality={imageQuality}
        className={imageForegroundClassName}
      />
    </div>
  );
}

export default function Portfolio() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const previousPreviewSlide = portfolioSlides[portfolioSlides.length - 1];

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
          className='w-full h-full flex flex-col overflow-hidden'
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          {!api && (
            <Card
              aria-hidden='true'
              className='pointer-events-none absolute left-[calc((100%_-_238px)/2_-_238px)] top-4 z-0 h-[238px] w-[238px] scale-[.828] overflow-hidden bg-page shadow-section-outer dark:bg-section-dark dark:shadow-section-outer-dark md:left-[calc((100%_-_622px)/2_-_622px)] md:h-[622px] md:w-[622px] md:scale-[.9] 2xl:left-[calc((100%_-_306px)/2_-_306px)] 2xl:h-[306px] 2xl:w-[306px] 2xl:scale-[.88]'
            >
              <CardContent className='flex aspect-square items-center justify-center p-0'>
                <PortfolioSlideImage slide={previousPreviewSlide} />
              </CardContent>
            </Card>
          )}
          <CarouselContent className='relative z-10 -ml-0 translate-x-[calc((100%_-_238px)/2)] pt-4 pb-7 md:translate-x-[calc((100%_-_622px)/2)] 2xl:translate-x-[calc((100%_-_306px)/2)]'>
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
                      <PortfolioSlideImage slide={slide} />
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
