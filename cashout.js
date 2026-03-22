document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1. get the agent number and validate
  const cashoutNumber = document.getElementById("agent-number");
  const number = cashoutNumber.value;
  console.log(number);
  if (number.length != 11 || !number.startsWith("01")) {
    alert("Antaji Number Not Allowed")
    return;
  }
  // 2. get the amount and validate
  const cashoutAmount = document.getElementById("cashout-amount").value;
  const balanceAmount = document.getElementById("balance");
  balance = balanceAmount.innerText;

  const newBalance = Number(balance) - Number(cashoutAmount)
  
  if (Number(cashoutAmount) > Number(balance)) {
    alert("Tor Kache Eto tk nai")
    return;
  }
  
  // 3. match the pin
  const pin = document.getElementById("cashout-pin").value;

  if (pin != "1234") {
    alert("Pin Vuilla Gechos? Thik Thak Pin de")
  }
  // 4. get the balance and show it
  else{
    balanceAmount.innerText = newBalance;  
  }
});
