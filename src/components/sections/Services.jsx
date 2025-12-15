import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import Section from "../ui/Section";
import { Server, ShieldCheck, Wifi, Video, Cloud, Network } from "lucide-react";

const services = [
    {
        title: "IT Infrastructure",
        description: "End-to-end network consulting, implementation, and maintenance for robust connectivity.",
        icon: Network,
    },
    {
        title: "Data Center Solutions",
        description: "Scalable, high-density architecture with zero-downtime deployment strategies.",
        icon: Server,
    },
    {
        title: "Security & Surveillance",
        description: "Next-gen CCTV, Biometric Access, and perimeter security with AI analytics.",
        icon: ShieldCheck,
    },
    {
        title: "Wireless Mobility",
        description: "Enterprise Wi-Fi 6/7 solutions and long-distance wireless connectivity.",
        icon: Wifi,
    },
    {
        title: "Audio Visual",
        description: "Immersive boardrooms, video walls, and smart conferencing ecosystems.",
        icon: Video,
    },
    {
        title: "Cloud & Web",
        description: "Seamless cloud migration, colocation services, and custom app deployment.",
        icon: Cloud,
    },
];

const Services = () => {
    return (
        <Section id="services" className="relative z-10">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Our Core <span className="text-brand-cyan">Capabilities</span>
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We deliver integrated technology solutions that drive efficiency and security without compromise.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 50,
                            damping: 20
                        }}
                    >
                        <GlassCard hoverEffect={true} className="h-full group">
                            <div className="mb-6 p-4 rounded-full bg-brand-cyan/10 w-fit group-hover:bg-brand-cyan/20 transition-colors">
                                <service.icon className="w-8 h-8 text-brand-cyan" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-cyan transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
