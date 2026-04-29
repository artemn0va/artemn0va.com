'use client';

import { useCallback, useContext, useEffect, useRef } from 'react';

import styles from '@/styles/2048/board.module.css';

import { GameContext } from '@/components/grid/showcases/2048/context/game-context';
import { Tile as TileModel } from '@/components/grid/showcases/2048/models/tile';

import MobileSwiper, { SwipeInput } from './mobile-swiper';
import Tile from './tile';

interface Props {
  isKeyboardEnabled?: boolean;
}

export default function Board({
  isKeyboardEnabled = true,
}: Readonly<Props>) {
  const { getTiles, moveTiles, startGame } = useContext(GameContext);
  const initialized = useRef(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const isContactDialogOpen = document.getElementById('contact-dialog');
      if (isContactDialogOpen) return;

      switch (e.code) {
        case 'ArrowUp':
          e.preventDefault();
          moveTiles('move_up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          moveTiles('move_down');
          break;
        case 'ArrowLeft':
          e.preventDefault();
          moveTiles('move_left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          moveTiles('move_right');
          break;
      }
    },
    [moveTiles],
  );

  const handleSwipe = useCallback(
    ({ deltaX, deltaY }: SwipeInput) => {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          moveTiles('move_right');
        } else {
          moveTiles('move_left');
        }
      } else if (deltaY > 0) {
        moveTiles('move_down');
      } else {
        moveTiles('move_up');
      }
    },
    [moveTiles],
  );

  const renderGrid = () => {
    const cells: JSX.Element[] = [];
    const totalCellsCount = 16;

    for (let index = 0; index < totalCellsCount; index += 1) {
      cells.push(<div className={styles.cell} key={index} />);
    }

    return cells;
  };

  const renderTiles = () => {
    return getTiles().map((tile: TileModel) => (
      <Tile key={`${tile.id}`} {...tile} />
    ));
  };

  useEffect(() => {
    if (initialized.current === false) {
      startGame();
      initialized.current = true;
    }
  }, [startGame]);

  useEffect(() => {
    if (!isKeyboardEnabled) {
      return;
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isKeyboardEnabled]);

  return (
    <MobileSwiper onSwipe={handleSwipe}>
      <div className={styles.board}>
        <div className={styles.tiles}>{renderTiles()}</div>
        <div className={styles.grid}>{renderGrid()}</div>
      </div>
    </MobileSwiper>
  );
}
