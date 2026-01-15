import React from 'react'
import { FaInstagram, FaGithub, FaHeart, FaCalculator, FaExchangeAlt, FaChartLine } from 'react-icons/fa'
import { SiReact,SiTailwindcss } from 'react-icons/si'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const features = [
        { icon: <FaCalculator />, label: 'Kalkulator' },
        { icon: <FaExchangeAlt />, label: 'Konverter' },
        { icon: <FaChartLine />, label: 'Grafik' },
    ];

    return (
        <footer className='w-full mt-12 shadow-2xl'>
            {/* Wave Divider */}
            {/* <div className="relative">
                <svg 
                    className="w-full h-16 fill-current text-secondary dark:text-tertiary"
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div> */}
            
            {/* Main Footer Content */}
            <div className='bg-secondary dark:bg-tertiary px-6 py-8'>
                <div className="max-w-6xl mx-auto">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-tertiary dark:bg-secondary flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                                    <FaCalculator className="text-white dark:text-text-dark text-lg" />
                                </div>
                                <h3 className="text-xl font-bold text-text-dark dark:text-white">
                                    Kalkulator<span className="text-tertiary dark:text-secondary">Pro</span>
                                </h3>
                            </div>
                            <p className="text-text-dark/70 dark:text-white/70 text-sm">
                                Aplikasi kalkulator premium dengan berbagai fitur konversi dan visualisasi grafik.
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="text-center">
                            <h4 className="font-semibold text-text-dark dark:text-white mb-4">Fitur Utama</h4>
                            <div className="flex justify-center gap-4">
                                {features.map((feature, index) => (
                                    <div 
                                        key={index}
                                        className="group flex flex-col items-center gap-2 cursor-pointer"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary dark:bg-secondary flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                                            <span className="text-tertiary dark:text-secondary text-xl group-hover:animate-bounce">
                                                {feature.icon}
                                            </span>
                                        </div>
                                        <span className="text-xs text-text-dark/70 dark:text-white/70 font-medium">
                                            {feature.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="text-center md:text-right">
                            <h4 className="font-semibold text-text-dark dark:text-white mb-4">Connect With Me</h4>
                            <div className="flex justify-center md:justify-end gap-3">
                                <a 
                                    href="https://www.instagram.com/athrsyd__" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <FaInstagram className="text-lg" />
                                </a>
                                <a 
                                    href="https://github.com/athrsyd" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-white shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <FaGithub className="text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-linear-to-r from-transparent via-text-dark/20 dark:via-white/20 to-transparent mb-6"></div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-sm text-text-dark/70 dark:text-white/70">
                            <span>Built with</span>
                            <SiReact className="text-cyan-500 animate-spin" style={{ animationDuration: '3s' }} />
                            <span className="font-medium">React &</span>
                            <SiTailwindcss className="text-cyan-500 animate-pulse" style={{ animationDuration: '3s' }} />
                            <span className="font-medium">Tailwind Css</span>
                        </div>
                        
                        <div className="text-center">
                            <p className="text-sm text-text-dark/70 dark:text-white/70">
                                Created by <span className="font-semibold text-tertiary dark:text-secondary">@Athrsyd__31</span>
                            </p>
                        </div>
                        
                        <p className="text-sm text-text-dark/70 dark:text-white/70">
                            © {currentYear} Kalkulator Premium. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer