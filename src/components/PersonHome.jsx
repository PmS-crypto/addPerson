import React, { useEffect } from 'react';
import PersonList from './PersonList';
import PersonAdd from './PersonAdd';
import './PersonHome.css'; // Import CSS file for styles and animations
import gsap from 'gsap';

const PersonHome = ({ persons, addPerson }) => {
  useEffect(() => {
    // Add scroll event listener for scrolling effect
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const secondSection = document.querySelector('.second-section');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
        secondSection.classList.add('visible');
      } else {
        header.classList.remove('scrolled');
        secondSection.classList.remove('visible');
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run effect only on component mount and unmount

  useEffect(() => {
    gsap.to("body", {
      background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)", // The color you want to change to
      scrollTrigger: {
        trigger: ".trigger-element", // The element that triggers the animation
        start: "top center", // When the top of the trigger element hits the center of the viewport
        end: "bottom center", // When the bottom of the trigger element hits the center of the viewport
        scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
    });
  }, []);

  return (
    <div>
      <header className="header">
        <h1 className="title">Person Management App</h1>
      </header>
      <div className="second-section">
        <div className="person-add animate-person-add">
          <PersonAdd addPerson={addPerson} />
        </div>
        <div className="person-list animate-person-list">
          <PersonList persons={persons} />
        </div>
      </div>
    </div>
  );
};

export default PersonHome;
