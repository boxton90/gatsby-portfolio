import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './contactForm.scss'

const ContactForm = ({ isSubmitting }) => (
    <Form id="form" className="form" action="https://formspree.io/boxton.da@gmail.com" method="POST">
        <div className="field-group">
            <div className="field-item">
                <Field className="text-input" type="name" name="name" placeholder="Name" />
                <p className="error">
                    <ErrorMessage className="error" name="name" />
                </p>
            </div>
            <div className="field-item">
                <Field className="text-input" type="email" name="email" placeholder="Email" />
                <p className="error">
                    <ErrorMessage className="error" name="email" />
                </p>
            </div>
            <div className="field-item">
                <Field className="text-area" component="textarea" name="message" placeholder="Message..." />
                <p className="error">
                    <ErrorMessage name="message" />
                </p>
            </div>
        </div>
        <button type="submit" className={isSubmitting ? 'button is-primary is-rounded is-medium is-loading' : 'button is-rounded is-primary is-medium'}>Submit</button>
    </Form>
)

const FormikForm = withFormik({
    mapPropsToValues({ name, email, message }) {
        return {
            name: name || '',
            email: email || '',
            message: message || ''
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required('name is required'),
        email: yup.string().email().required('email is required'),
        message: yup.string().required('message is required')
    }),
    handleSubmit(values, { setSubmitting, resetForm }) {
        document.getElementById('form').submit()
        setSubmitting(false)
        resetForm()
    }
})(ContactForm)

export default FormikForm