import React from 'react';

interface SnackbarProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Snackbar: React.FC<SnackbarProps> = ({ onClose, children }) => {
  return (
    <div className="snackbar">
      <div className="content">{children}</div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Snackbar;
