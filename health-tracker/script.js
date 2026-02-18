const form = document.getElementById("healthForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
     const name = document.getElementById("name").value;
     const age = document.getElementById("age").value;
const date = document.getElementById("date").value;
const problem = document.getElementById("problem").value;
const remedy = document.getElementById("remedy").value;
document.getElementById("output").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Problem:</strong> ${problem}</p>
    <p><strong>Remedy:</strong> ${remedy}</p>
`;

const record = {
    name: name,
    age: age,
    date: date,
    problem: problem,
    remedy: remedy
};
localStorage.setItem("healthRecord", JSON.stringify(record));



});
window.onload = function() {
   // your loading code here
};

