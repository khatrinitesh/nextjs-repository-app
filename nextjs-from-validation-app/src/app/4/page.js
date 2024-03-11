"use client";
import { useState } from "react";

const CustomApp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [formSuccess, setFormSuccess] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field and set the error message only if the form has been submitted
    if (isFormSubmitted) {
      setFormErrors({
        ...formErrors,
        [name]: validateField(name, value),
      });
    }
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        return value.trim() === "" ? "Email is required." : "";
      case "password":
        return value.trim() === "" ? "Password is required." : "";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newFormErrors = Object.keys(formData).reduce((errors, name) => {
      return { ...errors, [name]: validateField(name, formData[name]) };
    }, {});

    setFormErrors(newFormErrors);

    // Check for any remaining errors before submitting
    if (Object.values(newFormErrors).every((error) => error === "")) {
      setFormSuccess("Form submitted successfully!");
      // You can handle form submission logic here (e.g., sending data to the server)
    } else {
      setFormSuccess("");
      setIsFormSubmitted(true); // Set the form as submitted to display errors
      console.log("Form has errors. Please fix them.");
    }
  };

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
          {isFormSubmitted && formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
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
          {isFormSubmitted && formErrors.password && (
            <p className="error-message">{formErrors.password}</p>
          )}
        </div>

        <button type="submit">Submit</button>

        {formSuccess && <p className="success-message">{formSuccess}</p>}
      </form>
    </div>
  );
};

export default CustomApp;
