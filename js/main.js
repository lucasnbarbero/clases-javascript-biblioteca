// PRESTAMOS LIBROS

document.getElementById('add-loan-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bookTitle = document.getElementById('book-title').value;
    const customerName = document.getElementById('customer-name').value;

    addLoan(bookTitle, customerName);

    document.getElementById('add-loan-form').reset();
});

function addLoan(bookTitle, customerName) {
    const tableBody = document.getElementById('loans-table-body');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${bookTitle}</td>
        <td>${customerName}</td>
        <td>Prestado</td>
        <td>
            <button onclick="markAsReturned(this)">Devolver</button>
        </td>
    `;

    tableBody.appendChild(row);
}

function markAsReturned(button) {
    const row = button.parentElement.parentElement;
    row.cells[2].innerText = 'Devuelto';
    button.disabled = true;
}
