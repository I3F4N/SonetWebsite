import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { Server, ShieldCheck, Wifi, Video, Cloud, Network } from "lucide-react";
import infrastructureBg from '../../assets/infrastructure.jpg';

const services = [
    {
        title: "IT Infrastructure",
        description: "End-to-end network consulting, implementation, and maintenance for robust connectivity.",
        icon: Network,
        span: "md:col-span-2",
    },
    {
        title: "Data Center Solutions",
        description: "Scalable, high-density architecture with zero-downtime deployment strategies.",
        icon: Server,
        span: "md:col-span-1",
    },
    {
        title: "Security & Surveillance",
        description: "Next-gen CCTV, Biometric Access, and perimeter security with AI analytics.",
        icon: ShieldCheck,
        span: "md:col-span-1",
    },
    {
        title: "Wireless Mobility",
        description: "Enterprise Wi-Fi 6/7 solutions and long-distance wireless connectivity.",
        icon: Wifi,
        span: "md:col-span-2",
    },
    {
        title: "Audio Visual",
        description: "Immersive boardrooms, video walls, and smart conferencing ecosystems.",
        icon: Video,
        span: "md:col-span-1",
    },
    {
        title: "Cloud & Web",
        description: "Seamless cloud migration, colocation services, and custom app deployment.",
        icon: Cloud,
        span: "md:col-span-2", // Full width on last row if we want, or just match others
    },
];

const SpotlightCard = ({ children, className = "" }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className={`relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.15), transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};

const Services = () => {
    return (
        <Section id="services" className="relative z-10 py-24">
            {/* Background Accent */}
            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-brand-purple/10 blur-3xl rounded-full pointer-events-none" />

            {/* Detailed Infrastructure Background Image - Low Opacity */}
            <img
                src={infrastructureBg}
                alt="Infrastructure"
                className="absolute inset-0 z-0 opacity-10 pointer-events-none object-cover w-full h-full"
            />

            <div className="relative z-10 mb-16 px-4 md:px-0">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                >
                    Our Core <span className="text-brand-cyan">Capabilities</span>
                </motion.h2>
                <p className="text-gray-400 max-w-2xl text-lg">
                    We deliver integrated technology solutions that drive efficiency and security without compromise.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`${service.span || "col-span-1"}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <SpotlightCard className="p-8 group hover:border-brand-cyan/30 transition-colors">
                            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {service.description}
                            </p>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
