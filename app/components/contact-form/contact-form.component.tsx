'use client';
import emailjs from '@emailjs/browser';
import { FormEvent, useEffect, useState } from 'react';
import MessageSent from '../message-sent/message-sent.component';

type ContactFormFields = {
  fromName: string;
  message: string;
};

const defaultContactForm = {
  fromName: '',
  message: '',
};

type SendingState = {
  started: boolean;
  completed: boolean;
};
const ContactForm = () => {
  const [contactForm, setContactForm] =
    useState<ContactFormFields>(defaultContactForm);
  const [sending, setSending] = useState<boolean>(false);
  const [sendingState, setSendingState] = useState<SendingState>({
    started: false,
    completed: false,
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendingState({
      ...sendingState,
      started: true,
    });
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
        contactForm,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!
      )
      .then((resp) =>
        setSendingState({
          ...sendingState,
          completed: true,
        })
      )
      .catch((err) => setSending(false));
  };
  useEffect(() => {
    console.log(sendingState);
  }, [sendingState]);

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  if (sendingState.completed) {
    return <MessageSent />;
  } else {
    if (!sendingState.started) {
      return (
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-4'>
            <label htmlFor='' className='block mb-2 font-medium'>
              Name
            </label>
            <input
              type='text'
              className='border w-full p-2'
              defaultValue={contactForm.fromName}
              name='fromName'
              onChange={handleChange}
            />
          </div>
          <div className='form-group mb-4'>
            <label htmlFor='' className='block mb-2  font-medium'>
              Message
            </label>
            <textarea
              className='border w-full p-2'
              defaultValue={contactForm.message}
              name='message'
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button type='submit'>Send</button>
          </div>
        </form>
      );
    } else {
      return <p>Sending...</p>;
    }
  }
};

export default ContactForm;
