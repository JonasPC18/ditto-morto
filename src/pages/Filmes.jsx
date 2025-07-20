export default function Filmes() {
  return (
    <div className="text">
      <h2>Filmes</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>

        {/* Primeiro vídeo */}
        <div>
          <iframe
            src="https://player.vimeo.com/video/454752960"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video 1"
            style={{ maxWidth: "100%" }}
          ></iframe>
          <p>
            <a href="https://vimeo.com/454752960" target="_blank" rel="noopener noreferrer">
              Ver no Vimeo
            </a>
          </p>
        </div>


        {/* Segundo vídeo */}
        <div>
          <iframe
            src="https://player.vimeo.com/video/128079881"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video 2"
            style={{ maxWidth: "100%" }}
          ></iframe>
          <p>
            <a href="https://vimeo.com/128079881" target="_blank" rel="noopener noreferrer">
              Ver no Vimeo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
