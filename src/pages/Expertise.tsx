import React from 'react';
import { motion } from 'framer-motion';


const Expertise = () => {
  

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Leveraging cutting-edge technology to deliver exceptional solutions
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto my-10">
                  At Mudra Technologies, we have strategically focused our expertise on domains that reflect our commitment to precision and reliability. Our core competencies lie in the design and development of advanced weighing solutions, including weighbridges, industrial weighing scales, and tank weighing systems.

Each solution is crafted with meticulous attention to detail to meet the specific needs of our clients. By concentrating on these areas, we ensure that our products not only meet industry standards but also offer unparalleled accuracy and durability. Mudra Technologies is dedicated to empowering businesses with tools that enhance efficiency and accuracy, supporting industries that rely on precise measurements for their operations.
                  </p>
                </motion.div>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Weighing Scale Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use the latest technologies to build robust and scalable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Jewellery scale ', 'Bakery scale ', 'Table top ', 'Platform scale',
              'Price computing Scale', 'Portable scale','Tank Weighing','Weighbridge'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;