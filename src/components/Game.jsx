// src/components/Game.jsx
import { useEffect, useState } from 'react';

export default function Game() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Aquí defines la lógica de cuándo debería ser visible el componente
      if (scrollPosition > 300) { // Cambia esto según tu necesidad
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isVisible ? <p>Componente cargado al hacer scroll</p> : <p>Scroll down</p>}
    </div>
  );
}