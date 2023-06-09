import  { useState } from 'react';
import PopupForm from './components/popupForm';
import Snackbar from './components/successRegistration';
import ContentForm from './components/contentForm';

const ContainerForm = () => {
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

  const handleFormSubmit = () => {
    // Simulate saving form data to the server
    const dataToSave = {
      email: formData.email,
      fname: formData.fname,
      lname: formData.lname,
    };

    // Send the data to the server
    fetch('/api/saveFormData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSave),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved on the server:', data);
        setFormData({
          email: '',
          fname: '',
          lname: '',
        });
        setShowSnackbar(true); // Update the state to show the snackbar
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const closeSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleInputChange = (e) => {
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
          className="border-[1px] border-gray px-6 py-1 text-md font-semibold bg-white rounded-lg hover:scale-110 duration-200"
          onClick={openPopup}
        >
          Join Photo Club Membership
        </button>
        {isPopupOpen && (
          <PopupForm onClose={closePopup}>
            <ContentForm
              formData={formData}
              onChange={handleInputChange}
              onSubmit={handleFormSubmit}
            />
          </PopupForm>
        )}
      </div>

      {showSnackbar && (
        <Snackbar onClose={closeSnackbar}>
          Success Registration!
        </Snackbar>
      )}
    </div>
  );
};

export default ContainerForm;