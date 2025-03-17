import React from 'react';
import Container from './Container';
import { BsArrowUpRight } from 'react-icons/bs';
import emailjs from 'emailjs-com';

function ContactForm() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_f7a680a', 'template_camukf6', e.currentTarget, 'uV022euKqicaOlgG1')
      .then((result) => {
        alert('Message Sent Successfully!');
      }, (error) => {
        alert('Failed to send message, please try again.');
      });

    e.currentTarget.reset();
  };

  return (
    <>
      <Container>
        <section className="my-10 flex flex-wrap">
          <div className="w-full p-5 text-sm font-semibold text-zinc-400 lg:w-1/4">
            CONTACT US
          </div>
          <form onSubmit={sendEmail} className="flex w-full flex-wrap items-center justify-between p-5 lg:w-[75%]">
            <div className="w-full p-5 lg:w-1/2">
              <h3 className="mb-5 text-xl text-zinc-100">Book An Artiste</h3>
              <div>
                <label htmlFor="name">
                  <p className="text-lime-400">Your Name</p>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full border-0 border-b border-b-zinc-600 bg-transparent p-1 text-2xl focus:outline-none"
                  />
                </label>
                <label htmlFor="email" className="mt-16 block">
                  <p className="text-lime-400">Your Email</p>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    className="w-full border-0 border-b border-b-zinc-600 bg-transparent p-1 text-2xl focus:outline-none"
                  />
                </label>
              </div>
            </div>
            <div className="mt-10 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-1/3">
              <button type="submit" className="flex h-52 w-52 items-center justify-center rounded-full bg-zinc-900 font-semibold hover:bg-zinc-800">
                <span>SEND</span>
                <BsArrowUpRight className="ml-3 text-lime-400" />
              </button>
            </div>
          </form>
        </section>
      </Container>
    </>
  );
}

export default ContactForm;
