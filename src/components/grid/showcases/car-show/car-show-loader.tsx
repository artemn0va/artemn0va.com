export default function CarShowLoader() {
  return (
    <div className='flex aspect-video w-full items-center justify-center rounded-xl bg-black text-white'>
      <div
        className='h-6 w-6 animate-spin rounded-full border-b-2 border-current'
        aria-hidden='true'
      />
      <span className='sr-only'>Loading car scene</span>
    </div>
  );
}
