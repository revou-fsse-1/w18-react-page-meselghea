import React, { useRef, useEffect } from 'react';

interface PopupFormProps {
  onClose: () => void;
  children: React.ReactNode;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose, children }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50/50">
      <div ref={popupRef} className="max-w-[600px] min-h-[300px] bg-white rounded-lg flex flex-col items-center justify-center">
        <button className="absolute text-gray-500 top-4 right-4 hover:text-gray-700" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopupForm;





