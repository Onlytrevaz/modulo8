document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault(); 

var name = document.getElementById('name').value;
var phone = document.getElementById('phone').value;


var table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.rows.length);
var nameCell = newRow.insertCell(0);
var phoneCell = newRow.insertCell(1);
nameCell.textContent = name;
phoneCell.textContent = phone;
document.getElementById('name').value = '';
document.getElementById('phone').value = '';
});
