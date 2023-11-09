import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

const FormComponent = () => {

    const form = useFormik( {
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validateOnBlur: true,
        validationSchema: Yup.object({
            name: Yup.string()
                .matches(/^[a-zA-Z]{2,}$/, 'Name must contain at least 2 letters')
                .required('Name is required'),
            email: Yup.string()
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .required('Enter a message')
        }),
        onSubmit: (event) => {
            form.setSubmitting(false);

        }
    })


    const handleSubmit = async (event) => {
        event.preventDefault()
        const user= {name, email, message}
        const json= JSON.stringify(user)
        await fetch("the api" ,{
            method: "post",
            headers: {
                    "Content-Type": "application/json"
            },
            body: json
        })
    }


  return (
        <>
            <Formik
                initialValues={form.initialValues}
                validationSchema={form.validationSchema}
                onSubmit={form.handleSubmit}
                >
                <form id="message-form" className="message-form" noValidate onSubmit={(event) => handleSubmit(event)}>
                    <div className="one-row-form">

                    <input
                        className={`${form.touched.name && form.errors.name ? 'error' : ''}`}
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={form.values.name}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    </div>
                    <div className="one-row-form">
                    <input
                        className={`${form.touched.email && form.errors.email ? 'error' : ''}`}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={form.values.email}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    </div>
                    <div className="multi-row-form">
                        <textarea
                        className={`${form.touched.message && form.errors.message ? 'error' : ''}`}
                        id="message" name="message" placeholder="Your Message* "
                        value={form.values.message}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}>
                        </textarea>
                    </div>
                    <button type="submit" className="btn-yellow" >Submit</button>

                </form>
            </Formik>
        </>
    )
}

export default FormComponent