import React from 'react';
import LoginFormPages from './pages/LoginFormPages/LoginFormPages';
import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MyInput from './MyInput';
import * as Yup from 'yup';
import './App.css';

function App() {
  type initialValuesType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }
  const initialValues: initialValuesType = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  const validationSchema = Yup.object({
    email: Yup.string()
           .required("Stop stop")
           .min(7, "Lou symbol")
           .email('Alarmmmmm'),
    firstName: Yup.string()
               .required("Zapolni imya")
               .min(3, 'Minimum slov')
    
  })
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values, formik)
    }
  })
  return (
    // // <form onSubmit={formik.handleSubmit} className='form'>
    // //   <div>
    // //     <label htmlFor="email">Email:</label>
    // //     <input id="email" {...formik.getFieldProps('email')}/>
    // //     {formik.errors.email && formik.touched.email && (<div>{formik.errors.email}</div>)}
    // //   </div>
    // //   <div>
    // //     <label htmlFor="firstName">First name: </label>
    // //     <input id='firstName' type="text" name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/>
    // //     {formik.errors.firstName && formik.touched.firstName && (<div>{formik.errors.firstName}</div>)}
    // //   </div>
    // //   <button type='submit'>submit</button>
    // // </form>
    // <Formik 
    //        initialValues={initialValues}
    //        validationSchema={validationSchema}
    //        onSubmit={(values) => {
    //         console.log(values)
    //       }}>
    //         <Form className='form'>
    //           {/* <div>
    //             <label htmlFor="email">Email</label>
    //             <Field id="email" name="email" type="email"/>
    //             <ErrorMessage component="div" name='email'/>
    //           </div>
    //           <div>
    //             <label htmlFor="firstName">First name: </label>
    //             <Field id="firstName" type="text" name="firstName"/>
    //             <ErrorMessage component="div" name='firstName'/>
    //           </div> */}
    //           <MyInput id='email' label='Email :' name='email' type='email'/>
    //           <MyInput id='firstName' label='rrrrr :' name='firstName' type='text'/>
    //           <button type='submit'>+++</button>
    //         </Form>
    // </Formik>
    <div>
      <LoginFormPages />
    </div>
  );
}

export default App;
