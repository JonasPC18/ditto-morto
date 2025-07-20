import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ComicCarousel({ pages, onClose, startIndex = 0 }) {
  if (!pages?.length) return null;
  return (
    <div className="comic-modal-bg" onClick={onClose}>
      <div className="comic-modal" onClick={e => e.stopPropagation()}>
        <button className="comic-close" onClick={onClose}>×</button>
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          initialSlide={startIndex}
          style={{ width: '30vw', height: '70vh'}}
        >
          {pages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
  src={img}
  alt={`página ${idx + 1}`}
  style={{
    width: "100%",
    height: "59.9vh",
    objectFit: "contain",
    background: "#fff"
  }}
/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
