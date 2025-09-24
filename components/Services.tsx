"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks and cutting-edge technology.",
    points: [
      "React & Next.js Applications",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "API Development",
    ],
    icon: "/icons/code.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and visually stunning interfaces that provide exceptional experiences.",
    points: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping & Wireframing",
      "Design Systems",
    ],
    icon: "/icons/design.png",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimized websites for speed, SEO, and exceptional user engagement.",
    points: [
      "Speed Optimization",
      "SEO Implementation",
      "Core Web Vitals",
      "Analytics & Monitoring",
    ],
    icon: "/icons/speed.png",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, improvements, and technical support to keep your site thriving.",
    points: [
      "24/7 Technical Support",
      "Security Updates",
      "Content Management",
      "Performance Monitoring",
    ],
    icon: "/icons/support.png",
    color: "from-orange-500 to-orange-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      {/* Header Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="detached-header text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Comprehensive web development solutions tailored for the digital age
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={`grid lg:grid-cols-2 ${i % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Icon Section */}
                <div className={`bg-gray-800/50 p-12 flex items-center justify-center ${i % 2 === 0 ? '' : 'lg:order-2'}`}>
                  <div className={`w-80 h-80 flex items-center justify-center p-10 rounded-xl relative overflow-hidden`}>
             
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-12 ${i % 2 === 0 ? '' : 'lg:order-1'}`}>
                  <h3 className="text-3xl font-bold mb-6">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 text-lg text-gray-300">
                    {service.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}