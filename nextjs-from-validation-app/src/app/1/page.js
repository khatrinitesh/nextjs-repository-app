"use client"
import React, { useState } from 'react';

const CustomApp = () => {
    const { formData, formErrors, formSuccess, handleInputChange, handleSubmit } = useForm(
        { email: '', password: '' },
        validate
      );
  return (
    <div>
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
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
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
        />
        {formErrors.password && <p className="error-message">{formErrors.password}</p>}
      </div>

      <button type="submit">Submit</button>

      {formSuccess && <p className="success-message">{formSuccess}</p>}
    </form>
    </div>
  )
}

export default CustomApp

// Custom validation logic
const validate = {
    email: (value) => (value.trim() === '' ? 'Email is required.' : ''),
    password: (value) => (value.trim() === '' ? 'Password is required.' : ''),
  };

// Custom hook for form validation
const useForm = (initialState, validate) => {
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState('');
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
      setFormData({
        ...formData,
        [name]: value,
      });
  
      // Validate the field and set the error message
      setFormErrors({
        ...formErrors,
        [name]: validate[name](value),
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate all fields before submission
      const newFormErrors = Object.keys(initialState).reduce((errors, name) => {
        return { ...errors, [name]: validate[name](formData[name]) };
      }, {});
  
      setFormErrors(newFormErrors);
  
      // Check for any remaining errors before submitting
      if (Object.values(newFormErrors).every((error) => error === '')) {
        setFormSuccess('Form submitted successfully!');
        // You can handle form submission logic here (e.g., sending data to the server)
      } else {
        setFormSuccess('');
        console.log('Form has errors. Please fix them.');
      }
    };
  
    return {
      formData,
      formErrors,
      formSuccess,
      handleInputChange,
      handleSubmit,
    };
  };
