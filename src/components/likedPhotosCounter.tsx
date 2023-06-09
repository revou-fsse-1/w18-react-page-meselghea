import React from 'react';

interface LikesPhotoCounterProps {
  count: number;
}

const LikesPhotoCounter: React.FC<LikesPhotoCounterProps> = ({ count }) => {
  let responsed = "";

  if (count === 0) {
    responsed = "You have no liked photos yet :(";
  } else {
    responsed = `My Liked Photos (${count})`;
  }

  return (
    <div className="fixed top-0 right-0 px-4 py-2 text-white bg-green-700 rounded-bl-2xl">
      <span className="text-white text-md">{responsed}</span>
    </div>
  );
};

export default LikesPhotoCounter;