import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { TbSend } from "react-icons/tb";

import { useRef, useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8j8uh0z",
        "template_wfqr6i4",
        formRef.current as HTMLFormElement,
        "user_A7eoE1fFD5fe3WDT5Q4Av"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="text-gray-100 space-y-6 max-h-screen h-full flex flex-col justify-center lg:pl-48 max-w-4xl mx-auto w-full text-justify"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
      exit={{ opacity: 0, y: 200, transition: { delay: 0.1 } }}
    >
      <div>
        <div className="flex items-center space-x-12">
          <h2 className="text-6xl">Contact</h2>
          <NavLink to="/">
            <button
              className={`border px-4 py-2 ${
                done ? "text-violet-500" : "text-gray-400"
              } border-gray-400 hover:border-gray-50 hover:text-gray-50 transition duration-150`}
            >
              Back to Home
            </button>
          </NavLink>
        </div>
        <div className="text-right text-lg">
          <p>Phone Number</p>
          <p className="opacity-50">07907733824</p>
        </div>
        <div className="text-right mt-1 text-lg">
          <p>Email</p>
          <p className="opacity-50">atomcgarry@gmail.com</p>
        </div>
      </div>
      {done ? (
        <div>
          <h3 className="text-3xl">Thanks for getting in touch</h3>
          <p className="opacity-50">
            I will be reviewing your E-mail and get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <form
          className="grid grid-cols-2 gap-2 text-gray-900"
          onSubmit={(e) => handleSubmit(e)}
          ref={formRef}
        >
          <div>
            <label className="block text-xl text-gray-300">Full Name</label>
            <input
              type="text"
              name="contact_name"
              className="w-full h-12 focus:outline-violet-700 p-2"
            />
          </div>
          <div>
            <label className="block text-xl text-gray-300">Company</label>
            <input
              type="text"
              name="contact_company"
              className="w-full h-12 focus:outline-violet-700 p-2"
            />
          </div>
          <div>
            <label className="block text-xl text-gray-300">
              Contact Number
            </label>
            <input
              type="phone"
              name="contact_number"
              className="w-full h-12 focus:outline-violet-700 p-2"
            />
          </div>
          <div>
            <label className="block text-xl text-gray-300">
              E-mail Address
            </label>
            <input
              type="text"
              name="contact_email"
              className="w-full h-12 focus:outline-violet-700 p-2"
            />
          </div>
          <div className="col-span-2 mt-2">
            <label className="block text-xl text-gray-300">
              How can I help?
            </label>
            <textarea
              className="w-full focus:outline-violet-700 p-2"
              rows={10}
              name="message"
            ></textarea>
          </div>
          <div></div>
          <div className="justify-self-end">
            <button className="text-2xl px-10 py-2 border border-violet-700 hover:text-violet-400 text-gray-50 bg-violet-700 transition duration-150 hover:border-violet-700 flex items-center justify-center">
              <TbSend className="mr-1" />
              Send
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default Contact;
