import { useState } from "react";
import { comics } from "../data/comics";
import ComicCarousel from "../components/ComicCarousel.jsx";

export default function Quadrinhos() {
  const [openComic, setOpenComic] = useState(null);

  return (
    <div className="text">
      <h2>Quadrinhos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
        {comics.map((c, i) => (
          <div key={c.id} style={{ textAlign: "center", cursor: "pointer" }} onClick={() => setOpenComic(i)}>
            <img
  src={c.cover}
  alt={c.title}
  style={{
    width: 180,
    height: 180,
    objectFit: "contain",
    background: "#111",
    borderRadius: 10,
    boxShadow: "0 2px 8px #0007",
    border: "2px solid #fff"
  }}
/>
            <div style={{ marginTop: 8, fontWeight: 600 }}>{c.title}</div>
          </div>
        ))}
      </div>
      {openComic !== null && (
        <ComicCarousel
          pages={comics[openComic].pages}
          onClose={() => setOpenComic(null)}
        />
      )}
    </div>
  );
}
