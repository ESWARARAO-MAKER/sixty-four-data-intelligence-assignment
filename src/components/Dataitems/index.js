import React, { useState, useEffect, useRef } from 'react';
import './index.css'; 
import { plansList } from '../../data';

function Dataitems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [listWidth, setListWidth] = useState(0);
  const [numItemsToShow, setNumItemsToShow] = useState(5); 
  const scrollableListRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 890) {
        setNumItemsToShow(2);
      } else if (screenWidth < 670) {
        setNumItemsToShow(1);
      } else {
        setNumItemsToShow(3);
      }
      // Update list width
      setListWidth(scrollableListRef.current.offsetWidth);
      // Scroll to the active item
      scrollableListRef.current.scrollTo({
        left: activeIndex * listWidth,
        behavior: 'smooth',
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex, listWidth]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleArrowClick = (direction) => {
    let newIndex = activeIndex + direction;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= plansList.length) {
      newIndex = plansList.length - 1;
    }
    setActiveIndex(newIndex);
  };

  const handleLoadMore = () => {
    setNumItemsToShow(numItemsToShow + 3); 
  };

  return (
    <div className="scrollable-list-container">
      <div className="scrollable-list" ref={scrollableListRef}>
        {plansList.slice(0, numItemsToShow).map((item, index) => (
          <div key={index} className="list-item">
            <img src={item.img} alt={item.plan} />
            <span>{item.plan}</span>
            <small>{item.desc}</small>
          </div>
        ))}
      </div>

      <div className="arrow left" onClick={() => handleArrowClick(-1)}>&#10094;</div>
      <div className="arrow right" onClick={() => handleArrowClick(1)}>&#10095;</div>

      <ul className="dots">
        {[...Array(plansList.length).keys()].map(index => (
          <li
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </ul>
      <div>
        <button className="load-more-button" onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
}

export default Dataitems;
