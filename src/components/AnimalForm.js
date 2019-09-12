import React from 'react'
import { withFormik, Form, Field } from 'formik'

const AnimalForm = (props) => {
  console.log(props)

  return (
    <Form>
      <Field type="text" name="species" placeholder="Species"  />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default withFormik({
  mapPropsToValue: (values) => {
    return {
      species: values.species || 'default value'
    }
  },
  handleSubmit: (values) => {
    console.log(values)
  }
})(AnimalForm)