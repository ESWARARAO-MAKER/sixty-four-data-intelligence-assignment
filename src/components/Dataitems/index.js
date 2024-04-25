import React, { useState, useEffect } from 'react';
import './index.css'; 
import { plansList } from '../../data';

function Dataitems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [listWidth, setListWidth] = useState(0);
  const [scrollableList, setScrollableList] = useState(null);
  const [numItemsToShow, setNumItemsToShow] = useState(3); 

  useEffect(() => {
    const handleResize = () => {
        const screenWidth = window.innerWidth
        if (screenWidth < 890){
          setNumItemsToShow(2)
        }
        else if (screenWidth < 670){
          setNumItemsToShow(1)
        }
        else{
          setNumItemsToShow(3)
        }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {window.removeEventListener("resize", handleResize)}
  }, [])

  useEffect(() => {
    if (scrollableList) {
      const updateDimensions = () => {
        setListWidth(scrollableList.offsetWidth);
      };
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, [scrollableList]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (scrollableList) {
      scrollableList.scrollTo({
        left: index * listWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleArrowClick = (direction) => {
    let newIndex = activeIndex + direction;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= scrollableList.children.length) {
      newIndex = scrollableList.children.length - 1;
    }
    setActiveIndex(newIndex);
    if (scrollableList) {
      scrollableList.scrollTo({
        left: newIndex * listWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleLoadMore = () => {
    setNumItemsToShow(numItemsToShow + 3); 
  };

  return (
    <div className="scrollable-list-container">
      <div className="scrollable-list" ref={(ref) => setScrollableList(ref)}>
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
        {[...Array(scrollableList ? scrollableList.children.length : 0).keys()].map(index => (
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
