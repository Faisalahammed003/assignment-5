// card 1
const noakhaliBtn = document
  .getElementById("noakhali-btn")
  .addEventListener("click", function () {
    const input = parseFloat(document.getElementById("noakhali-input").value);

    // condition check
    if (isNaN(input) || input <= 0) {
      alert("Invalid Donation amount");
      return;
    }

    const screen = document.getElementById("noakhali-screen");
    const all = parseFloat(screen.innerText);
    const result = all + input;
    screen.innerText = result;

    // all amount part

    const accountTk = parseFloat(
      document.getElementById("account-tk").innerText
    );
    const accountScreen = accountTk - input;
    const allAmount = document.getElementById("account-tk");
    allAmount.innerText = accountScreen;
  });
// card-2
const feniBtn = document
  .getElementById("feni-btn")
  .addEventListener("click", function () {
    const input = parseFloat(document.getElementById("feni-input").value);

    // condition check
    if (isNaN(input) || input <= 0) {
      alert("Invalid Donation amount");
      return;
    }

    const screen = document.getElementById("feni-screen");
    const all = parseFloat(screen.innerText);
    const result = all + input;
    screen.innerText = result;

    // all amount part

    const accountTk = parseFloat(
      document.getElementById("account-tk").innerText
    );
    const accountScreen = accountTk - input;
    const allAmount = document.getElementById("account-tk");
    allAmount.innerText = accountScreen;
  });

// card 3
const quotaBtn = document
  .getElementById("quota-btn")
  .addEventListener("click", function () {
    const input = parseFloat(document.getElementById("quota-input").value);

    // condition check
    if (isNaN(input) || input <= 0) {
      alert("Invalid Donation amount");
      return;
    }

    const screen = document.getElementById("quota-screen");
    const all = parseFloat(screen.innerText);
    const result = all + input;
    screen.innerText = result;

    // all amount part

    const accountTk = parseFloat(
      document.getElementById("account-tk").innerText
    );
    const accountScreen = accountTk - input;
    const allAmount = document.getElementById("account-tk");
    allAmount.innerText = accountScreen;
  });

// link blog to home html

const Btn = document
  .getElementById("blog-btn")
  .addEventListener("click", function () {
    window.location.href = "/home.html";
  });
