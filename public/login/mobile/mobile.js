const google = document.querySelector("#google-login");
const meta = document.querySelector("#meta-login");

console.log(google);

function goToExtension() {
  window.location.href = "../../extension/bookmarks/extension.html";
}

google.addEventListener("click", (e) => {
  e.preventDefault();
  goToExtension();
});
meta.addEventListener("click", (e) => {
  e.preventDefault();
  goToExtension();
});
