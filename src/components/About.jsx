import React from 'react'
import { FaCode, FaDesign, FaMobile, FaCloud } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-primary-600 text-2xl" />,
      title: "Custom Development",
      description: "Tailored solutions built with modern technologies and best practices."
    },
    {
      icon: <FaDesign className="text-primary-600 text-2xl" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement."
    },
    {
      icon: <FaMobile className="text-primary-600 text-2xl" />,
      title: "Mobile First",
      description: "Responsive designs that work perfectly across all devices and screen sizes."
    },
    {
      icon: <FaCloud className="text-primary-600 text-2xl" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your business."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">YourCompany</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to 
            creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At YourCompany, we believe technology should empower businesses to achieve their goals. 
              We combine technical expertise with creative vision to deliver solutions that not only 
              meet your requirements but exceed your expectations.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team brings together years of experience in web development, mobile applications, 
              cloud computing, and digital marketing. We stay ahead of the curve with the latest 
              technologies and industry best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                React & Next.js
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Node.js & Python
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                AWS & Azure
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                UI/UX Design
              </span>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Your Team Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About