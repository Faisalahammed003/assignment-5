// history-btn

document.getElementById("history-btn").addEventListener("click", function () {
  hideSectionById("card");
  showSectionById("History");
  addColorById("bg-[#B4F461]", "hover:bg-[#B4F461]");
});

// donation-btn

document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionById("card");
  hideSectionById("History");
});

// HISTROY BTN COLOR
document.getElementById("history-btn").addEventListener("click", function () {
  const HisBtn = document.getElementById("history-btn");
  HisBtn.classList.add("bg-[#B4F461]", "hover:bg-[#B4F461]");
});
document.getElementById("history-btn").addEventListener("click", function () {
  const HisBtn = document.getElementById("donation-btn");
  HisBtn.classList.remove("bg-[#B4F461]", "hover:bg-[#B4F461]");
});

// DONATION BTN COLOR
document.getElementById("donation-btn").addEventListener("click", function () {
  const donBtn = document.getElementById("donation-btn");
  donBtn.classList.add("bg-[#B4F461]", "hover:bg-[#B4F461]");
});
document.getElementById("donation-btn").addEventListener("click", function () {
  const donBtn = document.getElementById("history-btn");
  donBtn.classList.remove("bg-[#B4F461]", "hover:bg-[#B4F461]");
});
