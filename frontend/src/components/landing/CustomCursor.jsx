import { useEffect, useRef } from 'react';

export const CustomCursor = ({ theme }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only initialize on desktop
    if (window.innerWidth <= 768) return;

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    cursor.appendChild(cursorDot);
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    let lastX = 0;
    let lastY = 0;
    let rafId = null;

    const updateCursor = () => {
      cursor.style.left = lastX + 'px';
      cursor.style.top = lastY + 'px';
    };

    const handleMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          updateCursor();
          rafId = null;
        });
      }

      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        cursor.style.opacity = '0';
      } else {
        cursor.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', handleMouseMove);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, [theme]);

  // Update cursor color when theme changes
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (cursor && theme) {
      cursor.style.borderColor = theme.ui;
      if (cursorDot) {
        cursorDot.style.backgroundColor = theme.ui;
      }
    }
  }, [theme]);

  return null;
};
