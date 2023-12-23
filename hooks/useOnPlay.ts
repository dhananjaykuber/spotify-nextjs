import { Songs } from '@/types';
import usePlayer from './usePlayer';
import useAuthModal from './useAuthModal';
import { useUser } from './useUser';

const useOnPlay = (songs: Songs[]) => {
  const player = usePlayer();
  const { isOpen, onOpen, onClose } = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;
