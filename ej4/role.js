async function renderUsers() {
    try {
        const resUsers = await fetch(`http://localhost:3000/users`);
        users = await resUsers.json();

        const usersContainer = document.getElementById('users');
        usersContainer.innerHTML = '';

        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Role:</strong> ${user.role}</p>
                <button onclick="toggleRole(${user.id}, true)">Promote</button>
                <button onclick="toggleRole(${user.id}, false)">Demote</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            `;

            usersContainer.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Error rendering users:', error);
        alert('Error loading users');
    }
}

async function addUser() {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const role = document.querySelector('select[name="role"]').value;
    if (!name || !email) {
        alert('Name and email are required');
        return;
    }
    try {
        await fetch(`${API_BASE}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, role })
        });
        renderUsers();
    } catch (error) {
        alert('Error adding user');
    }
}

renderUsers();