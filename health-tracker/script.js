const healthForm = document.getElementById('healthForm');
const recordTableBody = document.getElementById('recordTableBody');
const searchInput = document.getElementById('searchInput');

// Load records from local storage on startup
let records = JSON.parse(localStorage.getItem('healthRecords')) || [];

function displayRecords(filter = "") {
    recordTableBody.innerHTML = "";
    const filtered = records.filter(r => 
        r.name.toLowerCase().includes(filter.toLowerCase()) || 
        r.problem.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach((record, index) => {
        const row = `<tr>
            <td>${record.date}</td>
            <td>${record.name} (${record.age})</td>
            <td>${record.problem}</td>
            <td>${record.remedy}</td>
            <td><button class="delete-btn" onclick="deleteRecord(${index})">Delete</button></td>
        </tr>`;
        recordTableBody.innerHTML += row;
    });
}

healthForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newRecord = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        date: document.getElementById('date').value,
        problem: document.getElementById('problem').value,
        remedy: document.getElementById('remedy').value
    };
    records.push(newRecord);
    localStorage.setItem('healthRecords', JSON.stringify(records));
    displayRecords();
    healthForm.reset();
});

window.deleteRecord = (index) => {
    records.splice(index, 1);
    localStorage.setItem('healthRecords', JSON.stringify(records));
    displayRecords();
};

searchInput.addEventListener('input', (e) => displayRecords(e.target.value));

// Initial render
displayRecords();

