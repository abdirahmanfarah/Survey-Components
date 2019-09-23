import React from "react";

import { withFormik, Form, Field } from 'formik';
// import * as yup from 'yup';

import styled from 'styled-components';

const form = styled.div`
    background:blue;
`;


const Survey =() => {

  // const [survey, setSurvey] = useState([]);



  return (
    <Form>
      <Field type="text" name="Name" placeholder="Name" />
      <Field type="text" name="Age" placeholder="Age" />
      <Field type="text" name="Gender" placeholder="Gender" />
    </Form>
  )
}

export default withFormik({
  mapPropsToValues:(values) => {
    return {
      Name:values.Name,
      Age: values.Age,
      Gender: values.Gender
    }
  },

})(Survey);