import { motion } from "framer-motion";
import Section from "../ui/Section";

// Import all partner logos explicitly
import cisco from "../../assets/partners/cisco.png";
import avaya from "../../assets/partners/avaya.png";
import hp from "../../assets/partners/hp.png";
import fortinet from "../../assets/partners/fortinet.png";
import microsoft from "../../assets/partners/microsoft.png";
import google from "../../assets/partners/google.png";
import adc from "../../assets/partners/adc-krone.png";
import tyco from "../../assets/partners/tyco.png";
import engenius from "../../assets/partners/engenius.png";
import aws from "../../assets/partners/aws.png";
import ruckus from "../../assets/partners/ruckus.png";
import commscope from "../../assets/partners/commscope.png";
import netgear from "../../assets/partners/netgear.png";
import samsung from "../../assets/partners/samsung.png";
import bosch from "../../assets/partners/bosch.png";
import aruba from "../../assets/partners/aruba.png";
import dlink from "../../assets/partners/dlink.png";
import amp from "../../assets/partners/amp.png";

const partners = [
    { name: "Cisco", img: cisco, url: "https://www.cisco.com" },
    { name: "Avaya", img: avaya, url: "https://www.avaya.com" },
    { name: "HP", img: hp, url: "https://www.hp.com" },
    { name: "Fortinet", img: fortinet, url: "https://www.fortinet.com" },
    { name: "Microsoft Azure", img: microsoft, url: "https://azure.microsoft.com" },
    { name: "Google Cloud", img: google, url: "https://cloud.google.com" },
    { name: "ADC Krone", img: adc, url: "https://www.commscope.com" },
    { name: "Tyco", img: tyco, url: "https://www.tyco.com" },
    { name: "EnGenius", img: engenius, url: "https://www.engeniustech.com" },
    { name: "AWS", img: aws, url: "https://aws.amazon.com" },
    { name: "Ruckus", img: ruckus, url: "https://www.ruckusnetworks.com" },
    { name: "CommScope", img: commscope, url: "https://www.commscope.com" },
    { name: "Netgear", img: netgear, url: "https://www.netgear.com" },
    { name: "Samsung", img: samsung, url: "https://www.samsung.com/business" },
    { name: "Bosch", img: bosch, url: "https://www.bosch.com" },
    { name: "Aruba Networks", img: aruba, url: "https://www.arubanetworks.com" },
    { name: "D-Link", img: dlink, url: "https://www.dlink.com" },
    { name: "AMP Netconnect", img: amp, url: "https://www.commscope.com" },
];

const Partners = () => {
    return (
        <Section id="partners" className="py-20 overflow-hidden bg-brand-dark/50 border-y border-white/5">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-400">
                    Global Strategic <span className="text-white">Partners</span>
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-8 hover:pause">
                    {[...partners, ...partners].map((partner, index) => (
                        <a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0"
                        >
                            <div className="bg-white/90 hover:bg-white rounded-xl p-4 h-24 flex items-center justify-center transition-all mx-4 w-40">
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                    className="max-h-16 w-auto object-contain"
                                />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Gradient Fade Edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
            </div>
        </Section>
    );
};

export default Partners;
