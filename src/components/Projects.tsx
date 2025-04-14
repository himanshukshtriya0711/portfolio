import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, Launch, Cloud, ShoppingCart, Chat, CheckCircle } from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Teller App',
      description: 'A React-based weather application that provides real-time weather information.',
      icon: <Cloud className="text-purple-400 text-4xl mb-4" />,
      tech: ['React', 'Weather API', 'CSS'],
    },
    {
      title: 'To-Do List',
      description: 'A Django-based task management application with CRUD operations.',
      icon: <CheckCircle className="text-purple-400 text-4xl mb-4" />,
      tech: ['Django', 'Python', 'SQLite'],
    },
    {
      title: 'E-commerce Clones',
      description: 'Recreated landing pages of Amazon and Flipkart with responsive design.',
      icon: <ShoppingCart className="text-purple-400 text-4xl mb-4" />,
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'AI Chatbot',
      description: 'Developed intelligent chatbots using React and Botpress technologies.',
      icon: <Chat className="text-purple-400 text-4xl mb-4" />,
      tech: ['React', 'Botpress', 'AI'],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1a1a1f] p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-center">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <GitHub /> View Code
                  </button>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <Launch /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 