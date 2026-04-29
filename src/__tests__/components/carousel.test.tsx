import { fireEvent, render, screen } from '@testing-library/react';

import { Carousel } from '@/components/ui/carousel';

const scrollPrev = jest.fn();
const scrollNext = jest.fn();
const on = jest.fn();
const off = jest.fn();

jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: () => [
    jest.fn(),
    {
      canScrollPrev: () => true,
      canScrollNext: () => true,
      scrollPrev,
      scrollNext,
      on,
      off,
    },
  ],
}));

describe('Carousel', () => {
  beforeEach(() => {
    scrollPrev.mockClear();
    scrollNext.mockClear();
    on.mockClear();
    off.mockClear();
  });

  it('uses arrow keys by default', () => {
    render(<Carousel>Content</Carousel>);

    fireEvent.keyDown(screen.getByRole('region'), {
      key: 'ArrowLeft',
    });
    fireEvent.keyDown(screen.getByRole('region'), {
      key: 'ArrowRight',
    });

    expect(scrollPrev).toHaveBeenCalledTimes(1);
    expect(scrollNext).toHaveBeenCalledTimes(1);
  });

  it('can disable arrow key navigation', () => {
    render(<Carousel enableKeyboardNavigation={false}>Content</Carousel>);

    fireEvent.keyDown(screen.getByRole('region'), {
      key: 'ArrowLeft',
    });
    fireEvent.keyDown(screen.getByRole('region'), {
      key: 'ArrowRight',
    });

    expect(scrollPrev).not.toHaveBeenCalled();
    expect(scrollNext).not.toHaveBeenCalled();
  });
});
