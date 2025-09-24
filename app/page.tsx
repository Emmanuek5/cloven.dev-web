"use client";
import Image from "next/image";
import Services from "@/components/Services";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground enhanced-bg">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-[20px] rounded-full w-[80%] z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800 mx-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Cloven Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold">cloven.dev</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
    
              <a href="#contact">
              <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium">
              Book a Call
              </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced multi-layer background effects */}
        
        {/* Base gradient - more intense */}
        <div className="absolute inset-0 bg-gradient-to-l from-gray-800/60 via-gray-900/30 to-transparent"></div>
        
        {/* Radial glow effect - larger and more intense */}
        <div className="absolute right-0 top-0 w-3/4 h-full bg-gradient-radial from-gray-700/40 via-gray-800/25 to-transparent"></div>
        
        {/* Secondary radial glow for depth */}
        <div className="absolute right-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-white/5 via-gray-600/15 to-transparent blur-3xl"></div>
        
        {/* Hazy atmospheric effect */}
        <div className="absolute right-0 top-0 w-2/3 h-full opacity-40 blur-2xl bg-gradient-to-l from-gray-600/30 via-gray-700/20 to-transparent"></div>
        
        {/* Enhanced grid pattern with multiple layers */}
        <div className="absolute right-0 top-0 w-4/5 h-full opacity-25" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
                 linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px, 60px 60px, 120px 120px',
               maskImage: 'linear-gradient(to left, black 20%, rgba(0,0,0,0.8) 50%, transparent 80%)',
               WebkitMaskImage: 'linear-gradient(to left, black 20%, rgba(0,0,0,0.8) 50%, transparent 80%)'
             }}>
        </div>
        
        {/* Subtle noise texture for depth */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 mix-blend-overlay"
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
               backgroundSize: '20px 20px',
               filter: 'blur(0.5px)'
             }}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left max-w-xl"
          >
            <div className="text-sm font-mono text-gray-400 mb-4 tracking-widest">
              WEB DEVELOPMENT AGENCY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-shimmer block">MODERN WEBSITES</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 block">
                BUILT FOR SUCCESS
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              We create fast, beautiful, and conversion-focused websites that
              help your business grow. From startups to enterprises, we deliver
              web solutions that work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <button className="group bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 font-medium text-base relative overflow-hidden">
                  <span className="relative z-10">Book a Call</span>
                </button>
              </a>
              <a href="#services">
                <button className="border border-gray-600 text-white px-8 py-3 rounded-full hover:border-white hover:bg-white/10 transition-all font-medium text-base">
                  View Our Work
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/globe.png" // <-- replace with your PNG/SVG illustration
              alt="Digital Globe Illustration"
              width={500}
              height={500}
              className="max-w-[90%] lg:max-w-lg drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <Services />


      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-gray-950/50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="detached-header text-4xl md:text-5xl font-bold mb-6">
                Meet the 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 block">
                  Developer
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                The creative force behind cloven.dev&apos;s innovative digital solutions
              </p>
            </motion.div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 group-hover:border-gray-600 transition-all duration-300">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="w-56 h-56 mx-auto bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border-4 border-gray-600 group-hover:border-white transition-all duration-500 flex items-center justify-center shadow-2xl">
                      <Image src="/blueobsidian.png" alt="Blue Obsidian" width={200} height={200} className="rounded-full" />
                      </div>
                      
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-2">Blue Obsidian</h3>
                    <p className="text-gray-400 mb-4 text-xl">Full Stack Developer</p>
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      &quot;Just a Chill Guy TBH&quot;
                    </p>
                    
                    <div className="flex justify-center space-x-6 mb-8">
                      <a href="https://github.com/Emmanuek5" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group/link">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover/link:bg-white group-hover/link:text-gray-900 transition-all">
                          <span className="text-sm font-bold">G</span>
                        </div>
                        <span>GitHub</span>
                      </a>
                      <a href="https://linkedin.com/in/blueobsidian" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group/link">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover/link:bg-white group-hover/link:text-gray-900 transition-all">
                          <span className="text-sm font-bold">L</span>
                        </div>
                        <span>LinkedIn</span>
                      </a>
                      <a href="https://blueobsidian.me" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group/link">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover/link:bg-white group-hover/link:text-gray-900 transition-all">
                          <span className="text-sm font-bold">P</span>
                        </div>
                        <span>Portfolio</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-2xl font-bold mb-6 text-white">Tech Stack & Expertise</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                    <span className="text-lg font-semibold text-white block mb-2">Frontend</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm px-2 py-1 bg-gray-700 rounded-full text-gray-300">React</span>
                      <span className="text-sm px-2 py-1 bg-gray-700 rounded-full text-gray-300">Next.js</span>
                      <span className="text-sm px-2 py-1 bg-gray-700 rounded-full text-gray-300">TypeScript</span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                    <span className="text-lg font-semibold text-white block mb-2">Backend</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm px-2 py-1 bg-gray-700 rounded-full text-gray-300">Node.js</span>
                      <span className="text-sm px-2 py-1 bg-gray-700 rounded-full text-gray-300">Express</span>
                      <span className="text-sm px-2 py-1 bg-gray-700 rounded-full text-gray-300">APIs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-white">Philosophy</h4>
                <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                  &quot;Code is poetry in motion. Every line tells a story, every function serves a purpose. 
                  I believe in creating digital experiences that not only work flawlessly but inspire and delight.&quot;
                </blockquote>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="detached-header text-4xl md:text-5xl font-bold mb-6">
                Crafting Digital
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 block">
                  Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Where innovation meets execution. We transform ideas into powerful digital experiences 
                that drive results and exceed expectations.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-gray-900 rounded-md"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Innovation First</h3>
              <p className="text-gray-300 leading-relaxed">
                We stay ahead of the curve, implementing cutting-edge technologies and methodologies 
                to deliver solutions that set new standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-gray-900 rounded-md"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quality Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                Every line of code is crafted with precision. We believe in building robust, 
                scalable solutions that stand the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-gray-900 rounded-md"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Client Focused</h3>
              <p className="text-gray-300 leading-relaxed">
                Your success is our success. We work closely with you to understand your vision 
                and deliver solutions that exceed your expectations.
              </p>
            </motion.div>
          </div>

          {/* Stats & Process */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Our Approach</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Discovery & Strategy</h4>
                    <p className="text-gray-300">We dive deep into your business goals and user needs to create a strategic roadmap.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Design & Development</h4>
                    <p className="text-gray-300">Crafting beautiful, functional solutions with modern technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Launch & Support</h4>
                    <p className="text-gray-300">Seamless deployment with ongoing support to ensure your success.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-8 text-white text-center">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">3+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-400">Support Available</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Modern Tech Stack</span>
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Agile Development</span>
                      <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Scalable Solutions</span>
                      <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Performance Optimized</span>
                      <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="detached-header text-3xl md:text-4xl font-bold mb-4">Book a Call</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Ready to discuss your project? Let&apos;s schedule a call and bring your vision to life with modern web solutions.
          </p>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 max-w-4xl mx-auto">
            <InlineWidget 
              url="https://calendly.com/blueobsidian196/30min" 
              styles={{
                height: '700px',
                borderRadius: '12px'
              }}
            />
          </div>
          
          {/* Alternative Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Prefer a different way to connect?</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:blueobsidian196@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                📧 Email
              </a>
              <a href="https://linkedin.com/in/blueobsidian" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                💼 LinkedIn
              </a>
              <a href="https://github.com/Emmanuek5" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                🔗 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="Cloven Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-lg font-bold">cloven.dev</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 cloven.dev. All rights reserved. Crafting the future of web development.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
