document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.querySelector('#userTable tbody');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.id}</td>
                         <td>${user.cedula}</td>
                         <td>${user.nombre}</td>
                         <td>${user.fecha}</td>
                         <td>${user.ciudad}</td>`;
        userTableBody.appendChild(row);
    });
});