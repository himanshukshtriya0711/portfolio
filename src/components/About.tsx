import React from 'react';
import { motion } from 'framer-motion';
import { School, EmojiEvents, SportsMartialArts } from '@mui/icons-material';

const About = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science',
      institution: 'GLA UNIVERSITY',
      year: '2022-Present',
      score: '77.1% in first year'
    },
    {
      degree: 'Intermediate (PCM)',
      institution: 'CBSE Board',
      year: '2020',
      score: '72%'
    },
    {
      degree: 'High School',
      institution: 'CBSE Board',
      year: '2021',
      score: '86%'
    }
  ];

  const achievements = [
    'Bronze Medal in UP State Boxing Championship',
    'Participated in Open-National Boxing Tournament held at Rohtak',
    'Senior Sports Captain of the School',
    'Secure 9th position in 8km Cross Country race held at Agra',
    'Secured 20 Gold Medals, 5 Silver and 2 Bronze in District Level'
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ambitious B.Tech Computer Science student with a foundation in programming, software development,
            skilled in Python, Java, and web technologies. Experienced in hands-on projects, adaptable, and
            committed to solving real-world challenges through innovative tech solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1f] p-6 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <School className="text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-purple-400">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400">{edu.year}</p>
                  <p className="text-gray-400">{edu.score}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1f] p-6 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <EmojiEvents className="text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <SportsMartialArts className="text-purple-400 mr-3 mt-1" />
                  <p className="text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 