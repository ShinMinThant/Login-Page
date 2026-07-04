// window.addEventListener("load", () => {

// });

const user = JSON.parse(localStorage.getItem("user"));


if (!user) {
  window.location.replace = "login.html";
}

document.getElementById("userInfo").textContent = "Logged in as " + user.email;

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem(user);
  localStorage.clear();
  window.location.href = "login.html";
});
