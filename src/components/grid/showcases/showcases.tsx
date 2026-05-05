'use client';

import dynamic from 'next/dynamic';
import { EnterFullScreenIcon } from '@radix-ui/react-icons';
import { useContext, useEffect, useState } from 'react';

import Game2048 from '@/components/grid/showcases/2048/components/2048';
import GameProvider, {
  GameContext,
} from '@/components/grid/showcases/2048/context/game-context';
import CarShowLoader from '@/components/grid/showcases/car-show/car-show-loader';
import { Tile as TileModel } from '@/components/grid/showcases/2048/models/tile';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Typography from '@/components/typography';
import Section from '@/layouts/section';

const CarShow = dynamic(
  () => import('@/components/grid/showcases/car-show/car-show'),
  {
    ssr: false,
    loading: () => <CarShowLoader />,
  },
);

const showcaseTitles = ['2048', '3D'] as const;

function CarShowPlaceholder() {
  return <div className='aspect-video w-full rounded-xl bg-black' />;
}

function ShowcasesContent() {
  const { getTiles } = useContext(GameContext);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isCarSlideSettled, setIsCarSlideSettled] = useState(false);
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);
  const [frozenTiles, setFrozenTiles] = useState<TileModel[] | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    const unmountCarOnLeave = () => {
      const nextSlide = api.selectedScrollSnap();

      setSelectedSlide(nextSlide);

      if (nextSlide !== 1) {
        setIsCarSlideSettled(false);
      }
    };

    const unmountCarOnScroll = () => {
      setIsCarSlideSettled((isSettled) => {
        if (!isSettled || api.selectedScrollSnap() === 1) {
          return isSettled;
        }

        return false;
      });
    };

    const mountCarAfterSettle = () => {
      const nextSlide = api.selectedScrollSnap();

      setSelectedSlide(nextSlide);
      setIsCarSlideSettled(nextSlide === 1);
    };

    mountCarAfterSettle();
    api.on('select', unmountCarOnLeave);
    api.on('scroll', unmountCarOnScroll);
    api.on('settle', mountCarAfterSettle);
    api.on('reInit', mountCarAfterSettle);

    return () => {
      api.off('select', unmountCarOnLeave);
      api.off('scroll', unmountCarOnScroll);
      api.off('settle', mountCarAfterSettle);
      api.off('reInit', mountCarAfterSettle);
    };
  }, [api]);

  const openShowcaseDialog = (slideIndex: number) => {
    if (slideIndex === 0) {
      setFrozenTiles(
        getTiles().map((tile) => ({
          ...tile,
          position: [...tile.position] as [number, number],
        })),
      );
    }

    setExpandedSlide(slideIndex);
  };

  const handleDialogOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      return;
    }

    setFrozenTiles(null);
    setExpandedSlide(null);
  };

  return (
    <Section className='showcases bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark relative rounded-xl'>
      <div className='pointer-events-none absolute top-3.5 left-5 z-20'>
        <Typography isThemeRevert variant='h2' size='sm'>
          {showcaseTitles[selectedSlide] ?? showcaseTitles[0]}
        </Typography>
      </div>
      <Dialog open={expandedSlide !== null} onOpenChange={handleDialogOpenChange}>
        <DialogTrigger asChild>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='absolute right-1 top-1 z-20 h-10 w-10 rounded-full p-0 text-white transition-colors hover:bg-transparent hover:text-white focus-visible:ring-0'
            aria-label={`Open ${showcaseTitles[selectedSlide] ?? showcaseTitles[0]} showcase in dialog`}
            onClick={() => openShowcaseDialog(selectedSlide)}
          >
            <EnterFullScreenIcon className='h-4 w-4' />
          </Button>
        </DialogTrigger>
        <DialogContent
          hideCloseButton
          className='bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark w-fit max-w-[calc(100vw-24px)] overflow-hidden border-transparent pt-5 pb-5 px-3 sm:max-w-[calc(100vw-48px)] sm:px-6 sm:pt-6 sm:pb-6'
        >
          <div>
            {expandedSlide === 0 ? (
              <Game2048 isFullscreen isKeyboardEnabled />
            ) : (
              <CarShow isFullscreen />
            )}
          </div>
        </DialogContent>
      </Dialog>
      <Carousel
        setApi={setApi}
        enableKeyboardNavigation={false}
        className='select-none'
        opts={{
          loop: true,
          watchDrag: false,
        }}
      >
        <CarouselContent className='!overflow-visible' isShowcasesSection>
          <CarouselItem className='flex items-center justify-center'>
            <div className='relative'>
              <Game2048
                isKeyboardEnabled={
                  selectedSlide === 0 && expandedSlide !== selectedSlide
                }
                tilesOverride={
                  expandedSlide === 0 && frozenTiles ? frozenTiles : undefined
                }
              />
            </div>
          </CarouselItem>
          <CarouselItem className='flex items-center justify-center'>
            {expandedSlide === 1 ? (
              <CarShowPlaceholder />
            ) : isCarSlideSettled ? (
              <CarShow isInputEnabled={expandedSlide !== 1} />
            ) : selectedSlide === 1 ? (
              <CarShowLoader />
            ) : (
              <CarShowPlaceholder />
            )}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='max-w-max absolute top-[calc(100%-32px)] left-[calc(50%-48px)] focus-visible:ring-0 2xl:top-1/2 2xl:left-1.5' />
        <CarouselNext className='max-w-max absolute top-[calc(100%-32px)] right-[calc(50%-48px)] focus-visible:ring-0 2xl:top-1/2 2xl:right-1.5' />
      </Carousel>
    </Section>
  );
}

export default function Showcases() {
  return (
    <GameProvider>
      <ShowcasesContent />
    </GameProvider>
  );
}
