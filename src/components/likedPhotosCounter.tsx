import React, { useState, useEffect } from 'react';

interface LikesPhotoCounterProps {
  count: number;
}

const LikesPhotoCounter: React.FC<LikesPhotoCounterProps> = ({ count }) => {
  const [likedCount, setLikedCount] = useState(count);

  useEffect(() => {
    // Mengupdate jumlah liked secara otomatis saat prop 'count' berubah
    setLikedCount(count);
    console.log(`Liked count changed: ${count}`); // Menampilkan count di console
  }, [count]);

  let responsed = "";

  if (likedCount === 0) {
    responsed = "You have no liked photos yet :(";
  } else {
    responsed = `My Liked Photos (${likedCount})`;
  }

  return (
    <div className="fixed top-0 right-0 px-4 py-2 text-white bg-sky-950 rounded-bl-2xl">
      <span className="text-white text-md">{responsed}</span>
    </div>
  );
};

export default LikesPhotoCounter;