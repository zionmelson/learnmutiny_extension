document.addEventListener("DOMContentLoaded", function () {
  let app = firebase.app();
  console.log(app);
  let features = [
    "auth",
    "database",
    "firestore",
    "functions",
    "messaging",
    "storage",
    "analytics",
    "remoteConfig",
    "performance",
  ];

  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  }

  function displayWelcome(_user, _userImage) {
    document
      .querySelector(".login-info")
      .removeChild(document.querySelector(".login-text"));
    document
      .querySelector(".login-info")
      .removeChild(document.querySelector(".login-buttons"));

    document.querySelector(
      ".title"
    ).innerHTML = `<h6>Welcome:<br />${_user}</h6>`;
    document.querySelector(".bear").style.width = `75px`;
    document.querySelector(".bear").style.borderRadius = `25px`;
    document.querySelector(".bear").src = `${_userImage}`;
  }

  document
    .querySelector("#google-login")
    .addEventListener("click", async (e) => {
      e.preventDefault();

      const pending = await loginWithGoogle();
      const userInfo = pending.user;

      const user = userInfo.displayName;
      const userImage = userInfo.photoURL;

      console.log(userInfo);

      displayWelcome(user, userImage);
    });
});
