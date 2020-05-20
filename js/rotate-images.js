const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  if (card.dataset.side == "left") {
    card.addEventListener("mousemove", startRotateL);
    card.addEventListener("mouseout", stopRotate);
  } 
  else if (card.dataset.side == "right") {
    card.addEventListener("mousemove", startRotateR);
    card.addEventListener("mouseout", stopRotate);
  }
}

function startRotateL(event) {
  const cardItem = this.querySelector(".card-item");
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = "rotateY(" + (20 - halfHeight) / 45 + "deg)";
}

function startRotateR(event) {
  const cardItem = this.querySelector(".card-item");
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = "rotateY(" + (20 - halfHeight) / -45 + "deg)";
}

function stopRotate(event) {
  const cardItem = this.querySelector(".card-item");
  cardItem.style.transform = "rotate(0)";
}
