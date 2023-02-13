 import React from 'react';
 import ReactDOM from 'react-dom';
 import { createRoot } from 'react-dom/client';
 import { useFormik } from 'formik';
 import './styles.css';

 const validate = values => {
   const errors = {};
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Username should be an email';
   }

   if (!values.psw) {
    errors.psw = 'Required';
  } else if (values.psw.length > 15) {
    errors.psw = 'Must be 15 characters or less';
  }
 
   return errors;
 };
 
 const SignupForm = () => {
   const formik = useFormik({
     initialValues: {
       email: '',
       psw: '',
     },
     validate,
     onSubmit: values => {
       alert("Login Successful");
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
 
       <label htmlFor="emailField">Email</label>
       <input
         id="emailField"
         name="email"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div>
       ) : null}

      <label htmlFor="pswField">Password</label>
       <input
         id="pswField"
         name="psw"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.psw}
       />
       {formik.touched.psw && formik.errors.psw ? (
         <div id="pswError" style={{color: 'red'}}>{formik.errors.psw}</div>
       ) : null}
 
       <button id="submitBtn" type="submit">Submit</button>
     </form>
   );
 };

function App() {
  return <SignupForm />;
}


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);

