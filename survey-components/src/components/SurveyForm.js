import React, { useState, useEffect } from "react";

import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from "axios";

// import { Route, NavLink } from "react-router-dom";

// import styled from 'styled-components';

// const form = styled.form`
//     background:blue;
//     width:100px;
// `;


const Survey =({errors, touched, status}) => {

  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    if(status){
      setSurvey([...survey, status])
    }
  },[status])

  return (
      <Form>
        <h1>Hello there!</h1>
        {/* <p>We have some great ideas for our app but we would love your feedback to help make it better!</p> */}
      <h3>To help you get the best sleep, we need to know a couple of things about you.</h3>
        {touched.Name && errors.Name && <p>{errors.Name}</p>}
        <Field type="text" name="Name" placeholder="Name" />
        
        {touched.Age && errors.Name && <p>{errors.Age}</p>}
        <Field type="text" name="Age" placeholder="Age" />
  
        {touched.Email && errors.Name && <p>{errors.Email}</p>}
        <Field type="text" name="Email" placeholder="Email" />

        <Field component="textarea" type="text" name="Question1" placeholder="What is something you love about using this app?  " />

        <Field component="textarea" type="text" name="Question2" placeholder="What is something that can be better implemented? " />
  
        <button type="submit">Submit
        </button>
      </Form>
  )
}

export default withFormik({
  mapPropsToValues:(values) => {
    return {
      Name:values.Name || "",
      Age: values.Age || "",
      Email: values.Email || ""
    }
  },
    validationSchema: yup.object().shape({
      Name: yup.string().required(),
      Age: yup.string().required(),
      Email: yup.string().required()
    }),
    handleSubmit:(values, { setStatus}) => {
       axios
          .post("https://reqres.in/api/users", values)
            .then(res => {
              setStatus(res.data)
              console.log(res.data)
            })
            .catch((err) => {
              console.log('Error:', err)
            })
    }

  

})(Survey);