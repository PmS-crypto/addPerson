// src/components/PersonAdd.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonAdd = ({ addPerson }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      state: '',
      city: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().matches(/^[a-zA-Z]+$/, "No special characters").required('Required'),
      lastName: Yup.string().matches(/^[a-zA-Z]+$/, "No special characters").required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Must be 10 digits').required('Required'),
      state: Yup.string().required('Required'),
      city: Yup.string().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      addPerson(values);
      resetForm(); 
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Person</h2>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className="mt-1 p-2 w-full border rounded"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className="mt-1 p-2 w-full border rounded"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 p-2 w-full border rounded"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="mt-1 p-2 w-full border rounded"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700">State</label>
        <input
          id="state"
          name="state"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.state}
          className="mt-1 p-2 w-full border rounded"
        />
        {formik.touched.state && formik.errors.state ? (
          <div className="text-red-500 text-sm">{formik.errors.state}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700">City</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className="mt-1 p-2 w-full border rounded"
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-red-500 text-sm">{formik.errors.city}</div>
        ) : null}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Person</button>
    </form>
  );
};

export default PersonAdd;
