import { render } from '@testing-library/react';

import Board from '@/components/grid/showcases/2048/components/board';
import Score from '@/components/grid/showcases/2048/components/score';
import GameProvider from '@/components/grid/showcases/2048/context/game-context';

describe('Score', () => {
  it('should display score', () => {
    const { container } = render(
      <GameProvider>
        <Score />
        <Board />
      </GameProvider>,
    );

    expect(container.querySelector('.score > div')?.textContent).toEqual('0');
  });
});
