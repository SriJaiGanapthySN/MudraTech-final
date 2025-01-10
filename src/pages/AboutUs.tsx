import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Users } from 'lucide-react';
import PlatformImage from '../assets/truck.jpeg';


const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen  bg-cover bg-center" style={{ backgroundImage: `url(${PlatformImage})` }}>
        
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Welcome to Mudra Technologies
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Pioneering the future through innovative technology solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-left text-justify">
            At Mudra Technologies, we are committed to delivering unparalleled value to our customers by blending innovation with efficiency. Our brand ethos is built on providing unique and tailored solutions that cater to the evolving needs of our clients. With a dedication to excellence, we strive to serve our customers in the most efficient and effective manner, ensuring that every interaction is meaningful and every service is impactful.

We believe that true success comes from understanding our clients’ goals and challenges. By fostering a culture of trust and reliability, we aim to build lasting relationships that go beyond the typical service-provider dynamic. At Mudra Technologies, our mission is to empower our customers through technology, making their lives easier, more productive, and more connected.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Trusted Partner', description: '25+ years of excellence' },
              { icon: Cpu, title: 'Innovation', description: 'Cutting-edge solutions' },
              { icon: Users, title: 'Expert Team', description: '100+ professionals' },
              
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses through innovative technology solutions that drive growth,
                efficiency, and success in the digital age. We are committed to delivering
                excellence and maintaining long-term partnerships with our clients.
              </p>
              <ul className="space-y-4">
                {[
                  'Innovative Solutions for Complex Challenges',
                  'Customer-Centric Approach',
                  'Continuous Innovation and Learning',
                  'Sustainable Technology Practices',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;