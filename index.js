// 1 after compleat this project do coupon project today module task module 27 last video
// 2 make text editor module 27 last video

document.getElementById("loginBtn").addEventListener("click", () => {
  let email = document.getElementById("emailField").value;
  let password = document.getElementById("passwordField").value;
  if (email === "sharif@bank.com" && password === "123") {
    location.href = "./bank.html";
    // location.href = "bank.html";
    document.getElementById("emailField").value = "";
    document.getElementById("passwordField").value = "";
  } else {
    alert('Provide valid input')
    document.getElementById("emailField").value = "";
    document.getElementById("passwordField").value = "";
    return;
  }
});
