'use client';

import { isNil, throttle } from 'lodash';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useReducer,
} from 'react';

import {
  mergeAnimationDuration,
  tileCountPerDimension,
} from '@/components/grid/showcases/2048/constants';
import { Tile } from '@/components/grid/showcases/2048/models/tile';
import gameReducer, {
  initialState,
} from '@/components/grid/showcases/2048/reducers/game-reducer';

type MoveDirection = 'move_up' | 'move_down' | 'move_left' | 'move_right';

export const GameContext = createContext({
  score: 0,
  isGameStarted: false,
  moveTiles: (direction: MoveDirection) => {
    console.warn('moveTiles function is not implemented', direction);
  },
  getTiles: () => [] as Tile[],
  startGame: () => {
    console.warn('startGame function is not implemented');
  },
});

export default function GameProvider({
  children,
}: Readonly<PropsWithChildren>) {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  const getEmptyCells = () => {
    const results: [number, number][] = [];

    for (let x = 0; x < tileCountPerDimension; x++) {
      for (let y = 0; y < tileCountPerDimension; y++) {
        if (isNil(gameState.board[y][x])) {
          results.push([x, y]);
        }
      }
    }
    return results;
  };

  const appendRandomTile = () => {
    const emptyCells = getEmptyCells();
    if (emptyCells.length > 0) {
      const cellIndex = Math.floor(Math.random() * emptyCells.length);
      const newTile = {
        position: emptyCells[cellIndex],
        value: 2,
      };
      dispatch({ type: 'create_tile', tile: newTile });
    }
  };

  const getTiles = () => {
    return gameState.tilesByIds
      .map((tileId) => gameState.tiles[tileId])
      .filter((tile): tile is Tile => !isNil(tile));
  };

  const moveTiles = useCallback(
    throttle(
      (type: MoveDirection) => dispatch({ type }),
      mergeAnimationDuration * 1.05,
      { trailing: false },
    ),
    [dispatch],
  );

  const startGame = () => {
    dispatch({ type: 'create_tile', tile: { position: [0, 1], value: 2 } });
    dispatch({ type: 'create_tile', tile: { position: [0, 2], value: 2 } });
  };

  useEffect(() => {
    if (gameState.hasChanged) {
      setTimeout(() => {
        dispatch({ type: 'clean_up' });
        appendRandomTile();
      }, mergeAnimationDuration);
    }
  }, [gameState.hasChanged]);

  return (
    <GameContext.Provider
      value={{
        score: gameState.score,
        isGameStarted: gameState.tilesByIds.length > 0,
        getTiles,
        moveTiles,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
