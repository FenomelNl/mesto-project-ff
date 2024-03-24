const cardT = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(card, deleteCard) {
    const newCard = cardT.querySelector('.places__item').cloneNode(true);
    newCard.querySelector('.card__title').textContent = card.name;

    const cardImage = newCard.querySelector('.card__image');
    cardImage.src = card.link;
    cardImage.alt = card.name;

    const deleteButton = newCard.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    return newCard;
}

function deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}

initialCards.forEach((card) => {
    const item = createCard(card, deleteCard);
    placesList.appendChild(item);
});