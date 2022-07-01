import { motion } from "framer-motion";

const ActivelySearching = () => {
  return (
    <motion.div
      className="flex"
      variants={fadeIn}
      initial="hide"
      animate="show"
    >
      <span className="flex h-3 w-3 relative mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-white uppercase text-xs tracking-widest opacity-50">
        Open To Oppertunities
      </span>
    </motion.div>
  );
};

export default ActivelySearching;

const fadeIn = {
  hide: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { delay: 0.6 } },
};
