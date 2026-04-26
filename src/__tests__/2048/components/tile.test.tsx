import { render, waitFor } from '@testing-library/react';

import Tile from '@/components/grid/showcases/2048/components/tile';

describe('Tile', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render with correct position and value', () => {
    // Arrange
    const position: [number, number] = [1, 2];
    const value = 2048;

    // Act
    const { container } = render(<Tile position={position} value={value} />);

    const tile: HTMLDivElement = container.firstChild as HTMLDivElement;
    expect(tile.textContent).toEqual('2048');
    expect(tile.className).toEqual(
      'shadow-2048-cell dark:shadow-2048-cell-dark tile tile2048',
    );
  });

  it('should apply animation when value changes', async () => {
    // Arrange
    const position: [number, number] = [0, 0];
    const initialValue = 2;
    const updatedValue = 4;

    // Act
    const { getByText, rerender } = render(
      <Tile position={position} value={initialValue} />,
    );

    // Assert initial state
    const tileElement = getByText(`${initialValue}`);
    expect(tileElement).toBeInTheDocument();

    await waitFor(() => {
      expect(tileElement).toHaveStyle({
        transform: 'scale(1)',
      });
    });
    rerender(<Tile position={position} value={updatedValue} />);

    await waitFor(() => {
      expect(tileElement).toHaveStyle({
        transform: 'scale(1.1)',
      });
    });

    await waitFor(() => {
      expect(tileElement).toHaveStyle({
        transform: 'scale(1)',
      });
    });
  });
});
