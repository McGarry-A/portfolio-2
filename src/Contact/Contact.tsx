import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { TbSend } from "react-icons/tb"

const Contact = () => {
  return (
    <motion.div
      className="text-gray-100 space-y-6 max-h-screen h-full flex flex-col justify-center lg:pl-48 max-w-4xl mx-auto w-full text-justify"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
      exit={{ opacity: 0, y: 200, transition: { delay: 0.1 } }}
    >
      <div>
        <div className="flex items-center space-x-12">
          <h2 className="text-6xl">Contact</h2>
          <NavLink to="/">
            <button className="border px-4 py-2 text-gray-400 border-gray-400 hover:border-gray-50 hover:text-gray-50 transition duration-150">Back to Home</button>
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
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-xl text-gray-300">Full Name</label>
          <input className="w-full h-12 focus:outline-violet-700" />
        </div>
        <div>
          <label className="block text-xl text-gray-300">Company</label>
          <input className="w-full h-12 focus:outline-violet-700" />
        </div>
        <div>
          <label className="block text-xl text-gray-300">Contact Number</label>
          <input className="w-full h-12 focus:outline-violet-700" />
        </div>
        <div className="col-span-2 mt-2">
          <label className="block text-xl text-gray-300">How can I help?</label>
          <textarea
            className="w-full focus:outline-violet-700"
            rows={10}
          ></textarea>
        </div>
        <div></div>
        <div className="justify-self-end">
          <button className="text-2xl px-10 py-2 border border-violet-700 hover:text-violet-400 text-gray-50 bg-violet-700 transition duration-150 hover:border-violet-700 flex items-center justify-center">
              <TbSend className="mr-1"/>
              Send</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
