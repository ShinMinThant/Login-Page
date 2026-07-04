const form = document.getElementById("loginForm");
const  EmailError = document.getElementById("Eerror");
const  PswError = document.getElementById("Perror");
const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  window.location.replace("home.html");
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password = document.getElementById("password").value;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!emailPattern.test(email)) {
   EmailError.textContent = "Invalid email format!";
    return;
  }

  if (!passwordPattern.test(password)) {
    PswError.textContent =
      "Password must be 8+ chars, include uppercase, lowercase, number!";
    return;
  }

  const user = {
    email: email
  };
  localStorage.setItem('user',JSON.stringify(user))
  window.location.href="home.html";
});
