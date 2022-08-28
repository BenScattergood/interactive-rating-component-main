const mainContainer = document.getElementById("rating_page");
const thanksContainer = document.getElementById("thankYou_page");
const submitBtn = document.querySelector(".btn-submit");

const rating = document.getElementById("individual");
const rates = document.querySelectorAll(".ratings");

submitBtn.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})