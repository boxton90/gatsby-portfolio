import * as emailjs from 'emailjs-com'

export const config = {
    serviceID: process.env.GATSBY_EMAILJS_SERVICE_ID,
    templateID: process.env.GATSBY_EMAILJS_TEMPLATE_ID,
    userID: process.env.GATSBY_EMAILJS_USER_ID,
}

export { emailjs }