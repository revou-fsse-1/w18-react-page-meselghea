import React from 'react';
import LikePhotoButton from './likePhotoButton';

interface Photo {
  id: string;
  name: string;
  url: string;
  liked: boolean;
}

interface PhotoCardProps {
  photo: Photo;
  onLike: (photoId: string) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onLike }) => {
  const handleLikeClick = () => {
    onLike(photo.id);
  };

  return (
    <div className="photo-card">
      <img src={photo.url} alt="Photo" className="photo-image" />
      <LikePhotoButton
        liked={photo.liked}
        onLike={handleLikeClick}
      />
    </div>
  );
};

export default PhotoCard;