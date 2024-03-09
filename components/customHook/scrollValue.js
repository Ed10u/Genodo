import React, { useState, useEffect } from 'react';

// Custom hook for managing and exporting scroll value
export function useScrollValue() {
  const [ValueOfScroll, setScrollValue] = useState(0);

  useEffect(() => {
    function ScrollAnimation() {
      const htmlElement = document.documentElement;
      const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
      const scrollValue = Math.min(percentOfScreenHeightScrolled * 100, 100);
      htmlElement.style.setProperty("--scroll", scrollValue);
      setScrollValue(scrollValue); // Directly set the numeric value
    }

    window.addEventListener("scroll", ScrollAnimation);
    window.addEventListener("resize", ScrollAnimation);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", ScrollAnimation);
      window.removeEventListener("resize", ScrollAnimation);
    };
  }, []);

  return ValueOfScroll; // Return the current scroll value
}
