// history-btn

document.getElementById("history-btn").addEventListener("click", function () {
  hideSectionById("card");
});

// donation-btn

document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionById("card");
});
// color btn

const historyTab = document.getElementById("donation-btn");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-red");
});
