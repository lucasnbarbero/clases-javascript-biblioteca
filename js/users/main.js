import { UserManager } from "./UsersManager.js";


document.addEventListener("DOMContentLoaded", loadBookings);

const form = document.getElementById("userRegistration");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    //const fieldsAreFilled = validatedFields(form);


        const userData = {
            name: form.get("name"),
            lname: form.get("lname"),
            email: form.get("email"),
            membership: form.get('membership')
        };

        UserManager.addUser(userData);
         showUsersData(userData);
}

async function loadBookings() {
    UserManager.getAllUsers().then((users) => {
        users.forEach((user) => {
            showUsersData(user);
        });
    })
}

function showUsersData(userData) {
    const table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const lnameCell = newRow.insertCell(1);
    const emailCell = newRow.insertCell(2);
    const membershipCell = newRow.insertCell(3);
    const deleteButtonCell = newRow.insertCell(4);
    const editButtonCell = newRow.insertCell(5);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'deleteButton');
    deleteButton.textContent= "Borrar usuario";

    const editButton = document.createElement('button');
    editButton.setAttribute('id', 'editButton');
    editButton.textContent= "Editar información del usuario";

    nameCell.textContent = userData.name;
    lnameCell.textContent = userData.lname;
    emailCell.textContent = userData.email;
    membershipCell.textContent = userData.membership;
    deleteButtonCell.appendChild(deleteButton);
    editButtonCell.appendChild(editButton);


}