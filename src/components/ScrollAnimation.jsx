import { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, animation = 'slide-up', delay = 0, threshold = 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animate class when element comes into view
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay * 100);
          } else {
            // Optional: Remove animate class when element goes out of view
            // This allows for re-animation when scrolling back up
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger animation slightly before element is fully visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  const delayClass = delay > 0 ? `delay-${Math.min(delay, 5)}` : '';
  const animationClasses = `scroll-animate ${animation} ${delayClass}`.trim();

  return (
    <div ref={elementRef} className={animationClasses}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
