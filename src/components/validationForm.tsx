import React, { useState } from 'react';

interface ValidationFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  email: string;
  fname: string;
  lname: string;
}

const ValidationForm: React.FC<ValidationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    fname: '',
    lname: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, fname, lname } = formData;
    const errors: Partial<FormData> = {};

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!fname) {
      errors.fname = 'First Name is required';
    }

    if (!lname) {
      errors.lname = 'Last Name is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form>
      <label className="flex flex-col mt-4">
        <span className="text-sm font-semibold">User Email</span>
        <input
          className="mt-1 border-[1px] text-sm border-gray-400 px-2 py-1 rounded-lg"
          type="text"
          name="email"
          placeholder="Insert your email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="mt-1 ml-2 text-sm text-red-600">{errors.email}</span>}
      </label>
      <label className="flex flex-col mt-2">
        <span className="text-sm font-semibold">First Name</span>
        <input
          className="mt-1 border-[1px] text-sm border-gray-400 px-2 py-1 rounded-lg"
          type="text"
          name="fname"
          placeholder="Insert your first name"
          value={formData.fname}
          onChange={handleInputChange}
        />
        {errors.fname && <span className="mt-1 ml-2 text-sm text-red-600">{errors.fname}</span>}
      </label>
      <label className="flex flex-col mt-2">
        <span className="text-sm font-semibold">Last Name</span>
        <input
          className="mt-1 border-[1px] text-sm border-gray-400 px-2 py-1 rounded-lg"
          type="text"
          name="lname"
          placeholder="Insert your last name"
          value={formData.lname}
          onChange={handleInputChange}
        />
        {errors.lname && <span className="mt-1 ml-2 text-sm text-red-600">{errors.lname}</span>}
      </label>
      <button
        className="mt-4 w-full cursor-pointer border-[1px] border-grey px-6 py-1 text-md font-semibold top-[3px] right-[3px] bg-green-700 text-white rounded-lg duration-200"
        onClick={handleSubmit}
      >
        Register Now
      </button>
    </form>
  );
};

export default ValidationForm;