const LoginForm = document.querySelector("#loginForm");

LoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(LoginForm);
  const username = formData.get("username");
  const password = formData.get("password");

  const Logindata = {
    username,
    password,
  };

  console.log(Logindata);
  form.reset();

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    body: JSON.stringify(Logindata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const insertUser = response.json();

  if (response.status == 422 || !insertUser) {
    window.alert("Invalid Credentials!");
  } else {
    window.alert("User LoggedIn Successfully!");

    hideParty1.style.display = "";

    hideParty2.style.display = "";

    hideParty3.style.display = "";

    hideParty4.style.display = "";

    hideParty5.style.display = "";

    // for shivsena
    hideParty1.addEventListener("click", (event) => {
      alert("You Have Votted for Party1 !");
      location.reload();
    });

    // for bjp
    hideParty2.addEventListener("click", (event) => {
      alert("You Have Votted for Party2 !");
      location.reload();
    });

    // for bsp
    hideParty3.addEventListener("click", (event) => {
      alert("You Have Votted for Party3 !");
      location.reload();
    });

    // for congress
    hideParty4.addEventListener("click", (event) => {
      alert("You Have Votted for Party4 !");
      location.reload();
    });

    // for aap
    hideParty5.addEventListener("click", (event) => {
      alert("You Have Votted for Party5 !");
      location.reload();
    });
  }
});
