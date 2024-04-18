export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];

const cardTemplate = document.querySelector('#card-template').content;
export function createCard(newCard, deleteCard, likeCard, openImage) {
  const card = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = card.querySelector('.card__image');

  card.querySelector('.card__title').textContent = newCard.name;
  cardImage.addEventListener('click', openImage);
  cardImage.src = newCard.link;
  cardImage.alt = newCard.name;

  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeCard);

  return card;
}

export function deleteCard(evt) {
  const card = evt.target.closest('.card');
  card.remove();
}

export function likeCard(evt) {
  const likeButton = evt.target.closest('.card__like-button');
  likeButton.classList.toggle('card__like-button_is-active');
}