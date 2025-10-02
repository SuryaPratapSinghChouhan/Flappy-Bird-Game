import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaCloud, FaShoppingCart, FaSearch, FaHeadset } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-primary-600 text-3xl" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and technologies.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
    },
    {
      icon: <FaMobileAlt className="text-primary-600 text-3xl" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Performance", "Cross-platform", "App Store Ready", "Push Notifications"]
    },
    {
      icon: <FaCloud className="text-primary-600 text-3xl" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your business.",
      features: ["Auto Scaling", "High Availability", "Cost Effective", "24/7 Monitoring"]
    },
    {
      icon: <FaShoppingCart className="text-primary-600 text-3xl" />,
      title: "E-commerce",
      description: "Complete e-commerce solutions with payment integration and inventory management.",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"]
    },
    {
      icon: <FaSearch className="text-primary-600 text-3xl" />,
      title: "SEO & Marketing",
      description: "Digital marketing strategies to increase your online presence and reach.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      icon: <FaHeadset className="text-primary-600 text-3xl" />,
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your digital solutions running smoothly.",
      features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Performance Optimization"]
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 text-center">
                <button className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that fits your business needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services