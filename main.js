const cards = document.querySelectorAll(".card");

function flipCard() {
    this.classList.toggle("flip");
}

cards.forEach(card => {
    let cardClick = card.addEventListener("click", flipCard);
})