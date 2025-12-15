import { motion } from "framer-motion";
import Section from "../ui/Section";
import { Award, Shield, Clock, CheckCircle } from "lucide-react";

const features = [
    {
        title: "20+ Years Experience",
        description: "Deep industry knowledge delivering complex infrastructure projects across sectors.",
        icon: Award,
    },
    {
        title: "Zero-Trust Security",
        description: "Security is baked into every layer of our architecture, not just an add-on.",
        icon: Shield,
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock monitoring and rapid response teams ensuring business continuity.",
        icon: Clock,
    },
];

const WhyUs = () => {
    return (
        <Section id="why-us" className="bg-brand-dark relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* Left Side - Visual/Stats */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-brand-cyan/20 rounded-2xl blur-lg" />
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                            <h3 className="text-2xl font-bold mb-6">Built for Reliability</h3>
                            <ul className="space-y-4">
                                {['99.99% Uptime Guarantee', 'ISO 27001 Certified Processes', 'Vendor-Agnostic Consulting', 'Rapid Deployment Framework'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="text-brand-purple" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Features */}
                <div className="w-full md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-8"
                    >
                        Why Industry Leaders <br />
                        <span className="text-brand-purple">Trust Sonet</span>
                    </motion.h2>

                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                                        <feature.icon size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhyUs;
