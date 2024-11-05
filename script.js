document.getElementById("registroForm").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    
    if (nombre.trim() === "" || email.trim() === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        event.preventDefault(); // Evita el envío del formulario
    }
});
