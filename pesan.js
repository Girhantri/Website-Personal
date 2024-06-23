document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const ticketNumber = generateTicketNumber();
    
    document.getElementById('ticketNumber').textContent = ticketNumber;
    document.getElementById('ticketName').textContent = name;
    document.getElementById('ticketEmail').textContent = email;

    document.getElementById('ticket').classList.remove('hidden');
});

function generateTicketNumber() {
    const randomNum = Math.floor(Math.random() * 1000000000);
    return 'PWEB-' + String(randomNum).padStart(9, '0');
}