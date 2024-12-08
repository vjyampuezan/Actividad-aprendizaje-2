const registerUser = (event) => {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const ciudad = document.getElementById("ciudad").value;

    const user = { id, cedula, nombre, fecha, ciudad };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = 'tabla.html';
};

document.getElementById("registerForm").addEventListener("submit", registerUser);