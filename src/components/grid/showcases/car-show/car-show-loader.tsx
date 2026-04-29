export default function CarShowLoader() {
  return (
    <div className='flex h-[300px] w-full items-center justify-center rounded-xl bg-black text-white md:h-[320px] 2xl:h-full 2xl:min-h-[220px]'>
      <div
        className='h-6 w-6 animate-spin rounded-full border-b-2 border-current'
        aria-hidden='true'
      />
      <span className='sr-only'>Loading car scene</span>
    </div>
  );
}
