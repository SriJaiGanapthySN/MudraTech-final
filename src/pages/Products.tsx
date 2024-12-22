import { motion } from 'framer-motion';
import JwelleryImage from '../assets/jwellery-removebg-preview.png';
import PlatformImage from '../assets/platform-removebg-preview.png';
import ChickenImage from '../assets/chicken-removebg-preview.png';
import Price from '../assets/price-removebg-preview.png';
import TableTop from '../assets/table.jpeg';
import Comp from '../assets/comp-removebg-preview.png';
import Weigh from '../assets/truck.jpeg';
import Tank from '../assets/hooper.jpg';
import Crane from "../assets/crane.png";
import PRC from "../assets/t.png";

const Products = () => {
  const products = [
    {
      name: 'Jewellery scale',
      
      features: ['600g/10mg', '1kg/10mg'],
      image:  Price, 
    },
    {
      name: 'Bakery scale',
      
      features: ['20 kg'],
      image:  JwelleryImage,
    },
    
    {
      name: 'Table Top',
      
      features: ['upto 30 kg', ],
      image: TableTop, 
    },
    {
      name: 'Printer Scale',
      
      features: ['upto 30 kg',],
      image: Comp, 
    },
    {
      name: 'Platform scale',
      
      features: ['any capcity',],
      image: PlatformImage, 
    },
    {
      name: 'Portable scale',
      
      features: ['any capcity',],
      image: ChickenImage, 
    },
    {
      name: 'Tank Weighing',
      
      features: ['any capcity',],
      image: Tank, 
    },
    {
      name: 'Weighbridge',
      
      features: ['upto 100Ton',],
      image: Weigh, 
    },
    {
      name: 'Price computing Scale',
      
      features: ['upto 50 kg',],
      image: PRC, 
    },
    {
      name: 'CraneWeighing Scale',
      
      features: ['1 TON ,2 TON ,3 TON, 5 TON ,10 TON'],
      image: Crane, 
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Innovative solutions designed to transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-65 object-cover align-middle justify-items-center mx-auto"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  
                  <p className="text-gray-600 mb-6">Capacity available</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
