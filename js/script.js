if (window.SimpleAnime) {
  new SimpleAnime();
}

const curriculo = document.querySelector(".curriculo");

function handleCurriculo(event) {
  alert("Solicitar via E-mail ou Rede Social");
}

curriculo.addEventListener("click", handleCurriculo);
