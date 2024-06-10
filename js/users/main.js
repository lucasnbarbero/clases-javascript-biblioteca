
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    //const fieldsAreFilled = validatedFields(form);

    if (fieldsAreFilled.length === 0) {
        const userData = {
            name: form.get("name"),
            lname: form.get("lname"),
            email: form.get("email"),
        };

        // GuestManager.addBooking(guestData);
        // showGuestBookData(guestData);
    } else {
        showError(fieldsAreFilled);
    }
}