function welcomeMessage() {
    alert("¡Bienvenido a Agrosenda! Descubre nuestros productos frescos y saludables.");
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    alert("Gracias por contactarnos, " + name + ". Te responderemos pronto.");
    return true;
}