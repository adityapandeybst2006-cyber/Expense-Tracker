const form = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const transactionList = document.getElementById("transaction-list");
const balanceEl = document.getElementById("balance");

let transactions = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  const transaction = {
    id: Date.now(),
    description,
    amount
  };

  transactions.push(transaction);
  renderTransactions();
  form.reset();
});

function renderTransactions() {
  transactionList.innerHTML = "";

  let total = 0;

  transactions.forEach(tx => {
    total += tx.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${tx.description} 
      $${tx.amount}
      <button onclick="deleteTransaction(${tx.id})">X</button>
    `;

    transactionList.appendChild(li);
  });

  balanceEl.textContent = total.toFixed(2);
}

function deleteTransaction(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  renderTransactions();
}
