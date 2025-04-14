import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Email, LocationOn, LinkedIn } from '@mui/icons-material';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-purple-400" />,
      title: 'Phone',
      value: '8650264535',
      link: 'tel:8650264535'
    },
    {
      icon: <Email className="text-purple-400" />,
      title: 'Email',
      value: 'himanshu.kshatriya0711@gmail.com',
      link: 'mailto:himanshu.kshatriya0711@gmail.com'
    },
    {
      icon: <LocationOn className="text-purple-400" />,
      title: 'Address',
      value: 'Village Tora, Fatehabad road, Agra 282001',
      link: 'https://maps.google.com/?q=Agra'
    },
    {
      icon: <LinkedIn className="text-purple-400" />,
      title: 'LinkedIn',
      value: 'Himanshu Singh',
      link: 'https://www.linkedin.com/in/himanshu-singh-b605aa307/'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[#1a1a1f] rounded-lg hover:bg-purple-500/10 transition-colors group"
              >
                <div className="p-3 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors">
                  {info.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium">{info.title}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-[#1a1a1f] rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-[#1a1a1f] rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 bg-[#1a1a1f] rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-[#1a1a1f] rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 