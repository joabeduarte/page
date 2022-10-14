if (window.SimpleAnime) {
  new SimpleAnime();
}

// currículo
const curriculo = document.querySelector(".curriculo");

curriculo.addEventListener("click", () => {
  alert("Solicitar currículo via e-mail ou rede social");
});

// react
const react = document.querySelector(".react");

react.addEventListener("click", () => {
  alert("Certificado não disponível: Curso em andamento");
});
