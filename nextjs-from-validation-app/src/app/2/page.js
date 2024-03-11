"use client";
import React, { useState } from "react";

const CustomApp = () => {
    const { formData, formErrors, formSuccess, handleInputChange, handleSubmit } = useFormValidation(
        { email: '', password: '' },
        validationRules
      );
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {formErrors.email && <p className="error-message text-[red] font-bold">{formErrors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          maxLength={8}
        />
        {formErrors.password && <p className="error-message text-[red] font-bold">{formErrors.password}</p>}
      </div>

      <button type="submit">Submit</button>

      {formSuccess && <p className="success-message">{formSuccess}</p>}
    </form>
    </>
  )
};

export default CustomApp;

// Custom validation rules
const validationRules = {
    email: (value) =>
      value.trim() === ''
        ? 'Email is required.'
        : !/^\S+@\S+\.\S+$/.test(value)
        ? 'Email is invalid.'
        : '',
    password: (value) =>
      value.trim() === ''
        ? 'Password is required.'
        : value.length < 8
        ? 'Password must be at least 8 characters long.'
        : '',
  };

const useFormValidation  = (initialState, validateRules) => {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState("");

  const handleInputChange  = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // validate the field and set the error message
    setFormErrors({
      ...formErrors,
      [name]: validateRules[name](value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = Object.keys(initialState).reduce((errors,name) =>{
        return {...errors,[name]:validateRules[name](formData[name])};
    },{});
    setFormErrors(newFormErrors);

    // check for any remaining erros before submitting
     // Check for any remaining errors before submitting
     if (Object.values(newFormErrors).every((error) => error === '')) {
        setFormSuccess('Form submitted successfully!');
        // You can handle form submission logic here (e.g., sending data to the server)
      } else {
        setFormSuccess('');
        console.log('Form has errors. Please fix them.');
      }
  }

  return {
    formData,
    formErrors,
    formSuccess,
    handleInputChange,
    handleSubmit,
  };
};

