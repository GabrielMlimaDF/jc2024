const btn1 = document.querySelector("#btn-d1");
const btn2 = document.querySelector("#btn-d2");
const display1 = document.querySelector(".display-content");
function activebtn() {
  if (!this.classList.contains("active")) {
    this.classList.add("active");
    if (this !== btn1) {
      btn1.classList.remove("active");
    } else {
      btn2.classList.remove("active");
    }
  }
  if (btn1.classList.contains("active")) {
    display1.classList.remove("active-display");
  } else {
    display1.classList.add("active-display");
  }
}
btn1.addEventListener("click", activebtn);
btn2.addEventListener("click", activebtn);
