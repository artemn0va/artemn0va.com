import Board from '@/components/grid/showcases/2048/components/board';
import { Tile as TileModel } from '@/components/grid/showcases/2048/models/tile';
import Score from '@/components/grid/showcases/2048/components/score';
import { cn } from '@/lib/utils';

interface Props {
  isFullscreen?: boolean;
  isKeyboardEnabled?: boolean;
  tilesOverride?: TileModel[];
}

export default function Game2048({
  isFullscreen = false,
  isKeyboardEnabled = true,
  tilesOverride,
}: Readonly<Props>) {
  return (
    <div
      className={cn(
        isFullscreen &&
          'mx-auto flex w-full max-w-max flex-col gap-5 px-1 text-[#29303E] dark:text-white',
      )}
    >
      {isFullscreen && (
        <header className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
          <div className='flex items-center gap-5'>
            <div className='space-y-1'>
              <h2 className='text-3xl font-medium tracking-tight md:text-5xl'>
                2048
              </h2>
              <p className='text-sm text-[#29303E]/70 dark:text-white/70 md:text-base'>
                Use arrow keys or swipe to move the tiles.
              </p>
            </div>
            <Score />
          </div>
        </header>
      )}
      <main>
        <Board
          isKeyboardEnabled={isKeyboardEnabled}
          sizeVariant={isFullscreen ? 'expanded' : 'default'}
          tilesOverride={tilesOverride}
        />
      </main>

      {/* <footer>
        <div>Made with ❤️ by Artem</div>
      </footer> */}
    </div>
  );
}
