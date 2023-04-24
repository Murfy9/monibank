const campoDoFormulario = document.querySelectorAll("[required]");

campoDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {}
