import React from 'react';
import { Mail, Phone, MapPin, Factory } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:hello@mudratechnologies.in"><span>hello@mudratechnologies.in</span></a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+918637450864" target='blank'><span>+91  8637450864</span></a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Avarampalayam</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Developed By</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
              <Factory className="h-5 w-5 text-blue-400" />
                <span>Pyroguard Technologies</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:hello@pyroguard.co.in<"><span>hello@pyroguard.co.in</span></a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+918637450865" target='blank'><span>+91  9894474945</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Mudra Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;