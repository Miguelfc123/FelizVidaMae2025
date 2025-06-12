import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeartBackground.css";

const HeartBackground = () => {
  const dataInicio = new Date("2007-10-25T00:00:00");
  const [tempo, setTempo] = useState("");

  const imagens = [
    { src: "imagem1.jpg", legenda: "Nosso primeiro passeio juntos!" },
    { src: "imagem2.jpg", legenda: "Momentos de alegria em família!" },
    { src: "imagem3.jpg", legenda: "Festas de aniversário inesquecíveis!" },
    { src: "imagem4.jpg", legenda: "Viagens que nos uniram ainda mais!" },
    { src: "imagem5.jpg", legenda: "Risos e brincadeiras em família!" },
    { src: "imagem6.jpg", legenda: "Amor que nunca acaba!" },
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
// Dentro do return:
return (
  <div className="tempo-container">
    <header className="melhor-mae-header">
      💖 Melhor Mãe do Mundo 💖
    </header>
    
    <div className="carousel-container" style={{ marginTop: "60px" }}>
      <Carousel>
        {imagens.map((item, index) => (
          <Carousel.Item key={index} style={{ height: "400px" }}>
            <img
              src={item.src}
              alt={item.legenda}
              className=""
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 0 20px #ff69b4"
              }}
            />
            <Carousel.Caption>
              <h3 className="carousel-caption">{item.legenda}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

    <div className="tempo-info">
      <h2 className="contagem-titulo">Tempo Juntos</h2>
      <p className="contagem-texto">{tempo}</p>
    </div>
  </div>
);

  return (
    <div className="tempo-container">
      <div className="carousel-container" style={{ marginTop: "100px" }}>
        <Carousel>
          {imagens.map((item, index) => (
            <Carousel.Item key={index} style={{ height: "400px" }}>
              <img
                src={item.src}
                alt={item.legenda}
                className="carousel-img"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 0 20px #ff69b4"
                }}
              />
              <Carousel.Caption>
                <h3 className="carousel-caption">{item.legenda}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="tempo-info">
        <h2 className="contagem-titulo">Tempo Juntos</h2>
        <p className="contagem-texto">{tempo}</p>
      </div>

      
    </div>
  );
};

export default HeartBackground;
