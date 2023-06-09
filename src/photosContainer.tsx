import React, { useEffect, useState } from 'react';
import { Photo } from './data/photoDb';
import PhotoCard from './components/photoCard';

interface PhotosContainerProps {
  photos: Photo[]; // Add the 'photos' prop
  onLikeChange: (count: number) => void; // Add the 'onLikeChange' prop
}

const PhotosContainer: React.FC<PhotosContainerProps> = ({ photos, onLikeChange }) => {
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    // Mengambil data liked dari sessionStorage saat komponen dimuat
    const storedLikes = sessionStorage.getItem('likes');
    if (storedLikes) {
      const parsedLikes = JSON.parse(storedLikes);
      // Menyimpan data liked ke dalam state jika ada
      setLikes(parsedLikes);
    }
  }, []);

  const handleLike = (photoId: number) => {
    // Membalik status liked untuk foto dengan ID yang diberikan
    const updatedLikes = { ...likes };
    updatedLikes[photoId] = !updatedLikes[photoId];
    // Menyimpan data liked ke sessionStorage
    sessionStorage.setItem('likes', JSON.stringify(updatedLikes));
    // Memperbarui state liked
    setLikes(updatedLikes);

    // Menghitung jumlah liked yang true
    const likedCount = Object.values(updatedLikes).filter((liked) => liked === true).length;
    // Mengirim perubahan jumlah liked ke LikesPhotoCounter
    onLikeChange(likedCount);
  };

  return (
    <div className="mt-7 max-w-[900px] flex flex-wrap flex-row justify-center items-center gap-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} liked={likes[photo.id]} onLike={() => handleLike(photo.id)} />
      ))}
    </div>
  );
};

export default PhotosContainer;