import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'


const FormComponent = () => {

    const initialValues = {
            name: '',
            email: '',
            message: ''
        }

    const [values, setValues] = useState(initialValues);

    const handleSubmit = (event, values) => {
        event.preventDefault()
        console.log(values)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        })
      }

  return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                >
                <form id="message-form" className="message-form" noValidate onSubmit={(event) => handleSubmit(event, values)}>
                    <div className="one-row-form">
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="one-row-form">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="multi-row-form">
                        <textarea id="message" name="message" placeholder="Your Message* "
                        value={values.message}
                        onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn-yellow" >Submit</button>

                </form>
            </Formik>
        </>
    )
}

export default FormComponent