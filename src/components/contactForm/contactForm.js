import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'

const ContactForm = ({ errors, touched }) => (
    <Form>
        <div>
            <Field type="email" name="email" placeholder="Email" />
            {errors.email && touched.email && <p>{errors.email}</p>}
        </div>
        <div>
            <Field type="message" name="message" placeholder="Message" />
            {errors.message && touched.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
    </Form>
)

const FormikForm = withFormik({
    mapPropsToValues({ email, message }) {
        return {
            email: email || '',
            message: message || ''
        }
    },
    validationSchema: yup.object().shape({
        email: yup.string().email().required(),
        message: yup.string().required()
    }),
    handleSubmit(values) {
        console.log(values)
    }
})(ContactForm)

export default FormikForm