// card 1
const noakhaliBtn = document
  .getElementById("noakhali-btn")
  .addEventListener("click", function () {
    const input = parseFloat(document.getElementById("noakhali-input").value);

    // condition check
    if (isNaN(input) || input <= 0) {
      alert("Invalid Donation amount");
      return;
    } else {
      alert("Donation successful!");
    }

    // show history
    const p = document.createElement("p");
    p.innerText = `${input} Taka is Donate for Flood at Noakhali, Bangladesh
    Date:  ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)`;
    document.getElementById("show-history").appendChild(p);
    // history end

    const screen = document.getElementById("noakhali-screen");
    const all = parseFloat(screen.innerText);
    const result = all + input;
    screen.innerText = result;

    // all amount part

    const accountTk = parseFloat(
      document.getElementById("account-tk").innerText
    );
    if (accountTk < input) {
      alert("Insufficient Balance, Please Add Money First!");
      return;
    }
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
    } else {
      alert("Donation successful!");
    }
    // show history
    const p = document.createElement("p");
    p.innerText = `${input} Taka is Donated for Flood Relief in Feni,Bangladesh
    Date:  ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)`;
    document.getElementById("show-history").appendChild(p);
    // history end

    const screen = document.getElementById("feni-screen");
    const all = parseFloat(screen.innerText);
    const result = all + input;
    screen.innerText = result;

    // all amount part

    const accountTk = parseFloat(
      document.getElementById("account-tk").innerText
    );

    if (accountTk < input) {
      alert("Insufficient Balance, Please Add Money First!");
      return;
    }
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
    } else {
      alert("Donation successful!");
    }
    // show history
    const p = document.createElement("p");
    p.innerText = `${input} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
    Date:  ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)`;
    document.getElementById("show-history").appendChild(p);
    // history end

    const screen = document.getElementById("quota-screen");
    const all = parseFloat(screen.innerText);
    const result = all + input;
    screen.innerText = result;

    // all amount part

    const accountTk = parseFloat(
      document.getElementById("account-tk").innerText
    );

    if (accountTk < input) {
      alert("Insufficient Balance, Please Add Money First!");
      return;
    }
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
