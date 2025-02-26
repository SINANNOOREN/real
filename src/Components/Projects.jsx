import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Show 3 cards on large screens
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Show 2 cards on medium screens
      } else {
        setCardsToShow(1); // Show 1 card on small screens
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className='w-full overflow-hidden container mx-auto px-6 md:px-12 flex-col mb-20'
    >
      
      <h1 className='text-4xl font-bold mb-2 text-center'>
        Project <span className='underline font-light underline-offset-4 decoration-1'>completed</span>
      </h1>
      <p className='text-gray-500 mx-auto max-w-xl mb-8 text-center'>
        Crafting spaces, Building legacy - explore our portfolio
      </p>

      <div className='flex justify-end gap-4 mb-6 px-6'>
        <button
          onClick={prevProject}
          className='bg-gray-200 rounded border p-2'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button
          onClick={nextProject}
          className='bg-gray-200 rounded border p-2'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Project Slider */}
      <div className='overflow-hidden'>
        <div
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
          className='flex transition-transform duration-500 ease-in-out gap-5'
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto rounded-xl'
              />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 py-2 px-2 shadow-md rounded-md'>
                  <h1 className='text-xl font-semibold'>{project.title}</h1>
                  <p className='text-gray-500'>
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
