import React from 'react';
import { motion } from 'framer-motion';
import { Code, Storage, Build, Psychology } from '@mui/icons-material';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-purple-400 text-4xl" />,
      skills: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Frameworks',
      icon: <Build className="text-purple-400 text-4xl" />,
      skills: ['React', 'Django']
    },
    {
      title: 'Database Systems',
      icon: <Storage className="text-purple-400 text-4xl" />,
      skills: ['MySQL']
    },
    {
      title: 'Core Competencies',
      icon: <Psychology className="text-purple-400 text-4xl" />,
      skills: [
        'Problem Solving',
        'Collaboration',
        'Team Working Skills',
        'People Management',
        'Decision Making'
      ]
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
    <section id="skills" className="py-20 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and core competencies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1a1a1f] p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-shadow"
            >
              <div className="flex flex-col items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white mt-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 