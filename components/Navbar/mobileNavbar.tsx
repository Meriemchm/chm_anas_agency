import { NavbarData } from "@/data/NavbarData";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const menuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const MobileNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-10 lg:hidden"
        >
          {NavbarData.map((item) => (
            <motion.a
              variants={itemVariants}
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-4xl sm:text-5xl font-['Abel'] text-white"
            >
              {item.name}
            </motion.a>
          ))}

          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-12 py-4 rounded-full text-xl bg-white text-black"
              >
                Contact
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};