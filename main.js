// main.js - Scripts globales para Mazahua Hecho con Amor

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form-contact');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const messageDiv = document.getElementById('form-message');
      messageDiv.textContent = 'Gracias por inscribirte. Nos pondremos en contacto.';
      messageDiv.style.display = 'block';
      this.reset();
    });
  }

  // Carrito modal funcionalidad
  // Carrito modal funcionalidad para todas las páginas
  var verCarritoBtns = document.querySelectorAll('#ver-carrito');
  var carritoModal = document.getElementById('carrito-modal');
  var cerrarCarritoBtn = document.getElementById('cerrar-carrito');
  var carritoLista = document.getElementById('carrito-lista');

  // Ejemplo de contenido del carrito
  var carritoEjemplo = [
    'Blusa Bordada - $1200 MXN',
    'Rebozo artesanal - $1500 MXN',
    'Taller de Bordado - $350 MXN'
  ];

  if (verCarritoBtns.length && carritoModal && carritoLista && cerrarCarritoBtn) {
    verCarritoBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Limpiar lista
        carritoLista.innerHTML = '';
        // Agregar elementos
        carritoEjemplo.forEach(function(item) {
          var li = document.createElement('li');
          li.textContent = item;
          carritoLista.appendChild(li);
        });
        carritoModal.style.display = 'flex';
      });
    });
    cerrarCarritoBtn.addEventListener('click', function() {
      carritoModal.style.display = 'none';
    });
  }
});
