import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gamepad2, Smartphone, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <Gamepad2 size={40} className="text-cyan-400" />,
            title: "Game Development",
            description: "We build immersive gaming experiences using Unity, Godot, and Web technologies (Phaser, React). From casual mobile games to complex mechanics.",
            features: ["Mobile & Web Games", "Unity & Godot Experts", "Multiplayer Integration", "Game Design & Polish"]
        },
        {
            icon: <Smartphone size={40} className="text-purple-400" />,
            title: "App Development",
            description: "Custom mobile and web applications tailored to your business needs. We specialize in React Native, iOS, and Android development.",
            features: ["Cross-platform (React Native)", "Native iOS & Android", "Progressive Web Apps", "UI/UX Design"]
        },
        {
            icon: <BarChart3 size={40} className="text-pink-400" />,
            title: "Consulting & Strategy",
            description: "Already have a project? We help you optimize performance, improve monetization strategies, and refine user retention.",
            features: ["Technical Audit", "Monetization Strategy", "Performance Optimization", "Market Analysis"]
        }
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 radial-gradient opacity-30 pointer-events-none"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Build With Us
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-100">
                        Turn your ideas into digital reality. We design, develop, and launch premium games and applications for visionary clients.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 group">
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center container mx-auto px-4">
                <div className="glass-panel p-12 rounded-3xl max-w-4xl mx-auto border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 p-32 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

                    <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to start your project?</h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        Let's collaborate to build something extraordinary. Contact us today for a free consultation.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all transform hover:-translate-y-1"
                    >
                        Get into Contact <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
