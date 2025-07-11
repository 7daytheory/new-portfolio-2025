import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import ClimbingPhoto from '../../assets/climbing-photo.jpg';
import './Contact.css';
import { contact, about } from '../../content';

// Validation functions 
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateName = (name) => {
  // Allow letters, spaces, hyphens, apostrophes, and periods
  const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 50;
};

const validateSubject = (subject) => {
  return subject.length <= 100;
};

const validateMessage = (message) => {
  return message.length <= 1000;
};

// Sanitization utility function
const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  // Remove HTML tags and dangerous characters
  return str
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>]/g, '') // Remove remaining < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

 
const Contact = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_CONTACT_KEY;
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;

    // Sanitized input handlers
  const handleNameChange = (e) => {
    setNameValue(sanitizeString(e.target.value));
  };
  const handleEmailChange = (e) => {
    setEmailValue(sanitizeString(e.target.value));
  };
  const handleSubjectChange = (e) => {
    setSubjectValue(sanitizeString(e.target.value));
  };
  const handleMessageChange = (e) => {
    setMessageValue(sanitizeString(e.target.value));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(nameValue);
    const isEmailValid = validateEmail(emailValue);
    const isSubjectValid = validateSubject(subjectValue);
    const isMessageValid = validateMessage(messageValue);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      toast.error('Please fix the errors in the form before submitting.');
      return;
    }
  
    //Email Params
    const emailParams = {
      name: nameValue,
      email: emailValue,
      subject: subjectValue,
      message: messageValue,
    };
  
    // Send email with emailjs
    emailjs
    .send(SERVICE_KEY, TEMPLATE_KEY, emailParams, PUBLIC_KEY)
    .then(
      (result) => {
        setNameValue('');
        setEmailValue('');
        setSubjectValue('');
        setMessageValue('');
        console.log(result.text);
        toast.success('Success! Please check your email.');
      },
      (error) => {
        console.log(error.text);
        toast.error('Error! Please try again.');
      }
    );
  }

  const { contactHeader, contactSubmit, contactName, contactEmail, contactSubject, contactBody } = contact;
  const { aboutHeader, aboutIntroTop, aboutIntroBottom, aboutHobbies } = about;
  return (
    <div className="relative w-full p-4 sm:p-8 bg-white sm:w-[90%] lg:w-[75%] mx-auto">
      <Fade duration={2500}>
            <div className="text-red-800 text-[3em] absolute top-[-22px] hidden lg:block font-bold" id="contact">{contactHeader} <FontAwesomeIcon icon={faArrowDown} /></div>
        </Fade>
      <div className="flex flex-col sm:flex-row items-start gap-12 p-8 mx-auto max-w-4xl rounded-lg font-[sans-serif]">
      <div className="flex-1 space-y-4 w-full">
        <Fade duration={1000} triggerOnce>
          <h1 className="text-red-800 text-[2em] text-center lg:hidden sm:block font-bold">{contactHeader}</h1>
          <form className='p-4 md:mt-8' onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={handleNameChange}
                placeholder=" "
                required
                className="pt-3 pb-2 block w-full md:w-3/4 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{contactName}</label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="email"
                name="email"
                value={emailValue}
                onChange={handleEmailChange}
                placeholder=" "
                required
                className="pt-3 pb-2 block w-full md:w-3/4 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{contactEmail}</label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="subject"
                value={subjectValue}
                onChange={handleSubjectChange}
                placeholder=" "
                required
                className="pt-3 pb-2 block w-full md:w-3/4 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="subject" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{contactSubject}</label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <textarea
                name="message"
                value={messageValue}
                onChange={handleMessageChange}
                placeholder=" "
                rows="5"
                required
                className="pt-3 pb-2 block w-full md:w-3/4 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="message" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{contactBody}</label>
            </div>

            <div className="flex justify-end">
              <button
                type='submit'
                className="text-white bg-red-800 hover:bg-red-700 w-full lg:w-[35%] rounded-md text-sm shadow px-4 py-3 mt-4 md:mr-[25%]">
                {contactSubmit}
              </button>
            </div>
          </form>
          </Fade>
        </div>

        <div className="flex-1">
          <Fade duration={1000} delay={1000} direction='right' triggerOnce>
            <h1 className="text-4xl font-bold text-red-800 mb-2 mt-[-35px]">{aboutHeader}</h1>
          </Fade>
          <div className='text-slate-800 text-sm'>
          <Fade duration={1500} delay={500} direction='left' triggerOnce>
            <p>{aboutIntroTop}</p>
          </Fade>
          <Fade duration={750} delay={1250} direction='down' triggerOnce>
            <p>{aboutIntroBottom}</p>
          </Fade>
          <Fade duration={500} delay={1500} triggerOnce>
            <div className="p-2 border border-4 border-white w-90-% lg:w-[75%] rounded-lg shadow-lg flex m-auto">
              <img src={ClimbingPhoto} alt="Matthew Lowe Rock Climbing" className="h-auto border-red-800 border-4 border justify-center"></img>
            </div>
          </Fade>
          <Fade duration={1250} delay={750} direction='right' triggerOnce>
            <p className="mt-2">{aboutHobbies}</p>
          </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
