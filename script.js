document.getElementById("formularioContacto").addEventListener("submit", function(event) {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Todos los campos son obligatorios.");
    event.preventDefault();
    return;
  }

  if (!validateEmail(email)) {
    alert("Por favor ingresa un correo electrónico válido.");
    event.preventDefault();
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
