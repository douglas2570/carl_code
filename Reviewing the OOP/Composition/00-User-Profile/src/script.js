class Profile {
    #role;

    constructor(role) {
        this.#role = role;
    }

    getRole() {
        return this.#role;
    }
}

class User {
    #name;
    #profiles;

    constructor(name) {
        this.#name = name;
        this.#profiles = [];
    }

    addProfile(profile) {
        this.#profiles.push(profile);
    }

    getProfiles() {
        return this.#profiles;
    }

    getName() {
        return this.#name;
    }
}

// Instanciando o usuário
const user = new User('Alice');

// Atualizando o nome do usuário na página
document.getElementById('userName').textContent = user.getName();

// Função para adicionar perfil
document.getElementById('addProfileBtn').addEventListener('click', function () {
    const profileType = document.getElementById('profileType').value;
    if (profileType) {
        const newProfile = new Profile(profileType);
        user.addProfile(newProfile);
        updateProfileList();
        document.getElementById('profileType').value = ''; // Limpar o campo de entrada
    }
});

// Função para atualizar a lista de perfis
function updateProfileList() {
    const profileList = document.getElementById('profileList');
    profileList.innerHTML = ''; // Limpar a lista existente

    user.getProfiles().forEach(profile => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = profile.getRole();
        row.appendChild(cell);
        profileList.appendChild(row);
    });
}
