import React from 'react';
import { motion } from 'framer-motion';


const Experience = () => {
  

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Experience</h1>
            <p className="text-xl max-w-2xl mx-auto">
              A decade of excellence in delivering innovative technology solutions
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
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto my-10 text-left text-justify">
                  With over 25 years of experience, Mudra Technologies has proudly reached a significant milestone, celebrating the silver jubilee of our trusted brand, Digiweigh. Throughout the years, we have connected with more than 1 lakh customers, providing reliable and innovative solutions that have strengthened our bond with the community we serve.

Our journey is defined by a commitment to quality, precision, and customer satisfaction. We are dedicated to leveraging our extensive expertise to deliver unparalleled products and services, always focused on exceeding expectations and advancing the standards in our industry.

Join us as we continue to build on our legacy, fostering connections and setting new benchmarks in technology and service.
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

export default Experience;