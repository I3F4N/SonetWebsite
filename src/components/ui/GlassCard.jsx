import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hoverEffect = false }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 40px -10px rgba(6,182,212,0.2)" } : {}}
            className={`relative bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl overflow-hidden ${className}`}
        >
            {/* Noise Texture Overlay (Optional) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-noise" />

            {/* Content */}
            <div className="relative z-10">{children}</div>

            {/* Gradient Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-cyan/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full pointer-events-none" />
        </motion.div>
    );
};

export default GlassCard;
