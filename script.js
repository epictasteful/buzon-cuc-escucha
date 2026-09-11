document.getElementById('formSugerencia').addEventListener('submit', function (e) {
  e.preventDefault();

  // Como el proyecto es solo front-end, no se envía a un servidor.
  // Simplemente mostramos un mensaje de confirmación al usuario.
  const mensajeExito = document.getElementById('mensajeExito');
  mensajeExito.hidden = false;

  this.reset();

  mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
