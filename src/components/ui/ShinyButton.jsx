import { motion } from "framer-motion";

const ShinyButton = ({ children, onClick, className = "", variant = "primary" }) => {
    const baseStyles = "relative px-6 py-3 font-semibold rounded-lg overflow-hidden transition-all duration-300 group";

    const variants = {
        primary: "bg-brand-cyan text-brand-dark hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]",
        secondary: "border border-brand-cyan/50 text-brand-cyan hover:bg-brand-cyan/10 hover:border-brand-cyan",
        gradient: "bg-gradient-to-r from-brand-cyan to-brand-purple text-white border-0 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
        </motion.button>
    );
};

export default ShinyButton;
