import { useState, useEffect } from 'react';

export function useIsTop() {
  const [ isTop, setIsTop ] = useState(true);
  
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setIsTop(false) : setIsTop(true);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [isTop])

  return isTop;
}