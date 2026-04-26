import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarComponent() {
  return (
    <Avatar className='shadow-avatar-inner w-[100px] h-[100px] md:w-[112.5px] md:h-[112.5px] 2xl:w-[132px] 2xl:h-[132px]'>
      <AvatarImage
        src='https://ik.imagekit.io/webbuilder/avatars/avatar_eybjuZ958.jpg?updatedAt=1717003219847'
        alt='Artem Nova'
      />
      <AvatarFallback className='bg-section shadow-avatar-inner'>
        Ɐ
      </AvatarFallback>
    </Avatar>
  );
}
