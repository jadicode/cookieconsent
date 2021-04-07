const cookieContent = document.querySelector(".cookie");
const cookieButton = document.querySelector(".cookiebutton");

cookieButton.addEventListener("click", () => {
    cookieContent.classList.remove("active");
    localStorage.setItem("TermsJADICODE", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("TermsJADICODE")) {
        cookieContent.classList.add("active");
    }
}, 1000);