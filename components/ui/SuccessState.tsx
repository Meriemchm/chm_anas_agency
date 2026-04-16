import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Props {
  onReset: () => void;
}

const SuccessState = ({ onReset }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col items-center justify-center py-20 text-center space-y-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center"
      >
        <Check className="w-10 h-10 text-black" />
      </motion.div>

      <h3 className="text-2xl font-['Abel',sans-serif] text-black">
        Message envoyé
      </h3>

      <p className="text-gray-500 text-sm max-w-md">
        Merci pour votre message. Je vous répondrai dans les plus brefs délais.
      </p>

      {/* bouton retour */}
      <button
        onClick={onReset}
        className="
          mt-4
          text-sm text-gray-500
          border-b border-gray-300
          hover:text-black hover:border-black
          transition
        "
      >
        Envoyer un autre message
      </button>
    </motion.div>
  );
};

export default SuccessState;