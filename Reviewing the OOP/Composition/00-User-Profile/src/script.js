class Profile {
    #role; // # private access modifier

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


const user = new User('Alice');


document.getElementById('userName').textContent = user.getName();


document.getElementById('addProfileBtn').addEventListener('click', function () {
    const profileType = document.getElementById('profileType').value;
    if (profileType) {
        const newProfile = new Profile(profileType);
        user.addProfile(newProfile);
        updateProfileList();
        document.getElementById('profileType').value = ''; 
    }
});


function updateProfileList() {
    const profileList = document.getElementById('profileList');
    profileList.innerHTML = ''; 

    user.getProfiles().forEach(profile => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = profile.getRole();
        row.appendChild(cell);
        profileList.appendChild(row);
    });
}
