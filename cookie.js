if (!localStorage.getItem("cookieBannerDisplayed")) {
  document.getElementById("cookie-banner").style.display = "block";
} 

document.getElementById("cookie-button").addEventListener("click", () => {
  localStorage.setItem("cookieBannerDisplayed", "true");
  document.getElementById("cookie-banner").style.display = "none";
})