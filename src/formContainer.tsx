import React, { useState, } from 'react';
import PopupForm from './components/popupForm';
import Snackbar from './components/successRegistration';
import ContentForm from './components/contentForm';

const ContainerForm: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fname: '',
    lname: '',
  });

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = async () => {
    try {
      // Simulate saving form data to local storage using Axios
      localStorage.setItem('formData', JSON.stringify(formData));
      setShowSnackbar(true);
      setFormData({
        email: '',
        fname: '',
        lname: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  const closeSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="mt-6">
        <button
          className="cursor-pointer border-[1px] border-grey px-6 py-1 text-md font-semibold top-[3px] right-[3px] bg-white rounded-lg hover:scale-110 duration-200"
          onClick={openPopup}
        >
          Join Photo Club Membership
        </button>
        {isPopupOpen && (
          <PopupForm onClose={closePopup}>
            <ContentForm
              formData={formData}
              onChange={handleInputChange}
              onSubmit={() => {
                handleFormSubmit();
                closePopup();
              }}
              required={true}
            />
          </PopupForm>
        )}
      </div>

      {showSnackbar && (
        <Snackbar showSnackbar={showSnackbar} onClose={closeSnackbar}>
          Your Registration has been submitted successfully!
        </Snackbar>
      )}
    </div>
  );
};

export default ContainerForm;