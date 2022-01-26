// import React from 'react'
// import ContactPNG from '../assets/contact.png'

// function ContactCard(props) {
//   return (
//     <div className="contact-card">
//       <div className="card">
//         <h1 className="text-center">Contact Me</h1>
//         <div className="card-content">
         
//           <a href="tel:6784382224" className="ml-4 mt-4 font-weight-bold">
//             Phone
//           </a>

//           <a
//             href="mailto:mharizanova@yahoo.com"
//             className="ml-4 mt-4 font-weight-bold"
//           >
//             Email
//           </a>

//           <a
//             href="https://www.linkedin.com/in/mariya-harizanova-a9651b219/"
//             className="ml-4 mt-4 font-weight-bold"
//           >
//             LinkedIn
//           </a>

//           <a
//             href="https://github.com/mharizanova8703"
//             className="ml-4 mt-4 font-weight-bold"
//           >
//             GitHub
//           </a>
//           <img
//             src={ContactPNG}
//             alt="profile-photo"
//             className="profile float-left"
//           ></img>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactCard
import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactCard = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactCard;
