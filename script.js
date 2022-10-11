// Data

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tablink.classList.remove("active-tab");
  }
}

// SIDE MENU MOBILE SCREEN

const sidemenu = document.querySelector("#sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// Contact to Spreadsheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxFLDhy_WJFyS-dxAFMCY8gCtn96_Ow0azVfmIFZt8P-59OhgvnnOLmankVZHClOLs/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Massage Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
