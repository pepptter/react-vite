import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';


const FormComponent = () => {

    const [submitMessage, setSubmitMessage] = useState({text:'', type:''})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const form = useFormik( {
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validateOnBlur: true,
        validationSchema: Yup.object({
            name: Yup.string()
                .matches(/^[a-zA-Z -]{2,}$/, 'Name must contain at least 2 letters')
                .required('Name is required'),
            email: Yup.string()
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .required('Enter a message')
        }),
        onSubmit: async (values) => {
            await handleSubmit(values)
        }
    })


    const handleSubmit = async (user) => {
        try {
            const response = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
                switch(response.status){
                case 200:
                    setSubmitMessage({ text: 'Message sent, Thank you!', type: 'success' })
                    setIsFormSubmitted(true);
                    break
                default:
                    const result = await response.json()
                    setSubmitMessage({ text: result.message, type: 'error' })
                    setIsFormSubmitted(true);
                    break
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitMessage({ text: `An unexpected error occurred: ${error.message}`, type: 'error' });
        }
    };


  return (
        <>
            <form id="message-form" className="message-form" noValidate onSubmit={form.handleSubmit}>
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
                        className={`${form.touched.email && form.errors.email ? 'error': ''}`}
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
            {isFormSubmitted ? (
                <div className='flex-class'>
                    <div className={`submit-message ${submitMessage.type === 'success' ? 'green' : 'red'}`}>
                        {submitMessage.text}
                    </div>
                </div>
            ) : (
                Object.keys(form.errors).some((fieldName) => form.touched[fieldName] && form.errors[fieldName]) && (
                    <div className='flex-class row'>
                        <div className="additional-message">
                            Please correct the following error(s) to be able to submit your message:
                        </div>
                        {Object.keys(form.errors).map((fieldName, index) => {
                            if (form.touched[fieldName] && form.errors[fieldName]) {
                                return (
                                    <div key={index} className="error-message">
                                        {form.errors[fieldName]}
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                )
            )}
        </>
    )
}

export default FormComponent