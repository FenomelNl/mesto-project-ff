const cardTemplate = document.querySelector('#card-template').content;
export function createCard(newCard, deleteCard, likeCard, openImage) {
    const card = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = card.querySelector('.card__image');

    card.querySelector('.card__title').textContent = newCard.name;
    cardImage.addEventListener('click', openImage);
    cardImage.src = newCard.link;
    cardImage.alt = newCard.name;

    card.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    card.querySelector('.card__like-button').addEventListener('click', likeCard);

    return card;
}

export function deleteCard(evt) {
    evt.target.closest('.card').remove();
}

export function likeCard(evt) {
    evt.target.closest('.card__like-button').classList.toggle('card__like-button_is-active');
}