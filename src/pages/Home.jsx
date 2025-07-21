import { useEffect, useState } from 'react';

import capa_dm01 from '../assets/capa_dm01.jpg';
import capa_dm02 from '../assets/capa_dm02.jpg';
import capa_dm03 from '../assets/capa_dm03.jpg';

const frames = [capa_dm01, capa_dm02, capa_dm03];

export default function Home() {
  const [idx, setIdx] = useState(0);

  // troca a cada 2 frames de 24 fps  →  1000/24*2 ≈ 83 ms
  useEffect(() => {
    // pré‑carrega para evitar flicker
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(
      () => setIdx((i) => (i + 1) % frames.length),
      1000 / 24 * 2
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      className="imagem_capa"
      src={frames[idx]}
      alt={`Capa ${idx + 1}`}
    />
  );
}