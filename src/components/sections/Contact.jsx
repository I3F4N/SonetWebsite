import { motion } from "framer-motion";
import ShinyButton from "../ui/ShinyButton";
import Section from "../ui/Section";
import { Mail } from "lucide-react";

const Contact = () => {
    return (
        <Section id="contact" className="py-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border border-white/10 p-12 text-center"
            >
                <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

                <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
                    Ready to Upgrade Your Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                    Schedule a consultation with our system architects to design a custom solution for your enterprise.
                </p>

                <div className="relative z-10 flex justify-center">
                    <ShinyButton variant="primary" onClick={() => window.location.href = "mailto:info@sonetsolutions.in"}>
                        <Mail className="mr-2" size={20} />
                        Get in Touch
                    </ShinyButton>
                </div>
            </motion.div>
        </Section>
    );
};

export default Contact;
