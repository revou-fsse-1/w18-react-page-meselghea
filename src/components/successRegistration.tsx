import React from 'react';

interface SnackbarProps {
  showSnackbar: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Snackbar: React.FC<SnackbarProps> = ({ showSnackbar, onClose, children }) => {
  if (!showSnackbar) {
    return null;
  }

  return (
    <div className="max-w-[600px] min-h-[30px] fixed z-50 bottom-[10px] px-12 py-2 bg-green-700 rounded-lg text-white">
        <div className="flex items-center justify-between ">
          <div className="mr-4 font-bold">{children}</div>
            <button className="close-button" onClick={onClose}>
              X
            </button>
        </div>
    </div>
  );
};

export default Snackbar;

