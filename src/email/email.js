import * as emailjs from 'emailjs-com'

export const config = {
    serviceID: process.env.EMAILJS_SERVICE_ID,
    templateID: process.env.EMAILJS_TEMPLATE_ID,
    userID: process.env.EMAILJS_USER_ID,
}

export { emailjs }