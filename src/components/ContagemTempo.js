import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeartBackground.css";

const ContagemTempo = () => {
  const dataInicio = new Date("2007-10-25T00:00:00");
  const [tempo, setTempo] = useState("");
  const [spotifySrc, setSpotifySrc] = useState(
    "https://open.spotify.com/embed/track/4s76r7AbquJcTccqJiqdVu?utm_source=generator"
  );

  const imagens = [
    { src: "imagem7.jpg", legenda: "Família" },
    { src: "imagem8.jpg", legenda: "Alegria" },
    { src: "imagem9.jpg", legenda: "Inesquecível!" },
    { src: "imagem10.jpg", legenda: "União!" },
  ];

  const imagensRangiku = [
    { src: "rangikuchat.png", legenda: "Rangiku Chat" },
    { src: "rangiku.webp", legenda: "Rangiku" },
  ];

  const calcularTempo = () => {
    const agora = new Date();
    const tempoPassado = agora - dataInicio;

    const dias = Math.floor(tempoPassado / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoPassado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoPassado % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoPassado % (1000 * 60)) / 1000);

    setTempo(`${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
  };

  useEffect(() => {
    const intervalo = setInterval(calcularTempo, 1000);
    calcularTempo();
    return () => clearInterval(intervalo);
  }, []);

  const choverCoracoes = () => {
    const emoji = "💖";
    const elemento = document.createElement("div");
    elemento.className = "emoji";
    elemento.innerText = emoji;
    elemento.style.left = `${Math.random() * 100}vw`;
    elemento.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(elemento);

    setTimeout(() => {
      elemento.remove();
    }, 5000);
  };

  useEffect(() => {
    const chuva = setInterval(choverCoracoes, 800);
    return () => clearInterval(chuva);
  }, []);

  const tocarDoInicio = () => {
    setSpotifySrc(
      "https://open.spotify.com/embed/track/4s76r7AbquJcTccqJiqdVu?utm_source=generator"
    );
  };

  const tocarAPartirDoTempo = () => {
    setSpotifySrc(
      "https://open.spotify.com/embed/track/4s76r7AbquJcTccqJiqdVu?utm_source=generator&t=183"
    );
  };

  return (
    <div className="tempo-container">
      <div className="carousel-container">
        <Carousel>
          {imagens.map((item, index) => (
            <Carousel.Item key={index} style={{ height: "400px" }}>
              <img
                src={item.src}
                alt={item.legenda}
                className="carousel-img"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3 className="carousel-caption">{item.legenda}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="carousel-container" style={{ marginTop: "40px" }}>
        <h2 className="contagem-titulo">Desde criança eu te achava igual a Rangiku Mãe</h2>
        <Carousel>
          {imagensRangiku.map((item, index) => (
            <Carousel.Item key={index} style={{ height: "400px" }}>
              <img
                src={item.src}
                alt={item.legenda}
                className="carousel-img"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3 className="carousel-caption">{item.legenda}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotify-container">
        <h2 className="contagem-titulo">Mas essa é mais bonitinha🤍</h2>
        <iframe
          className="spotify-frame"
          title="Spotify Music"
          src={spotifySrc}
          width="300"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div style={{ marginTop: "10px" }}>
          <button
            className="btn-iniciar-musica"
            onClick={tocarDoInicio}
            style={{ marginRight: "10px" }}
          >
            Tocar do Início
          </button>
          <button className="btn-iniciar-musica" onClick={tocarAPartirDoTempo}>
            Tocar a partir de 3:03
          </button>
        </div>
      </div>

      <div className="tempo-info">
        <h2 className="contagem-titulo">Tempo Juntos</h2>
        <p className="contagem-texto">{tempo}</p>
      </div>

      <footer className="footer">
        <p>Feito com 💖 por Miguel</p>
      </footer>
    </div>
  );
};

export default ContagemTempo;
