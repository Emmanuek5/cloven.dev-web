"use client";
import { m } from "framer-motion";
import Image from "next/image";
import { containerStagger, fadeInUp, scaleIn } from "@/lib/motion";

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
    <section id="services" className="relative section-bg">
      {/* Header Section */}
      <div className="py-20 px-6 relative z-10">
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
      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <m.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, i) => (
            <m.div
              key={i}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl backdrop-blur-sm hover:border-gray-700 transition-all duration-300 h-full"
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Icon + Title row (icon top-left) */}
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <m.ul
                  className="space-y-3 text-sm md:text-base text-gray-300 mt-auto"
                  variants={containerStagger}
                >
                  {service.points.map((point, j) => (
                    <m.li key={j} className="flex items-center gap-3" variants={fadeInUp(j * 0.04)}>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/90"></span>
                      <span>{point}</span>
                    </m.li>
                  ))}
                </m.ul>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}