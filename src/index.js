import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { openPopup, closePopup, closeForms } from './components/modal.js';

import addIcon from './images/add-icon.svg';
import avatar from './images/avatar.jpg';
import cardOne from './images/card_1.jpg';
import cardTwo from './images/card_2.jpg';
import cardThree from './images/card_3.jpg';
import close from './images/close.svg';
import deleteIcon from './images/delete-icon.svg';
import editIcon from './images/edit-icon.svg';
import likeActive from './images/like-active.svg';
import likeInactive from './images/like-inactive.svg';
import logo from './images/logo.svg';

/* добавление стартовых карточек */
const placesList = document.querySelector('.places__list');
initialCards.forEach((newCard) => {
  const item = createCard(newCard, deleteCard, likeCard, openImage);
  placesList.appendChild(item);
});

/* добавление новой карточки */
const newCard = document.querySelector('.popup_type_new-card')
const newPlace = newCard.querySelector('.popup__form');
newPlace.addEventListener('submit', formSubmit);
export function formSubmit(evt) {
  evt.preventDefault();
  const item = {
    name: newPlace.querySelector('.popup__input_type_card-name').value,
    link: newPlace.querySelector('.popup__input_type_url').value
  }
  placesList.prepend(createCard(item, deleteCard, likeCard, openImage));
  newPlace.reset();
  closeForms(newPlace);
}

/* редактирование профиля */
const editProfile = document.querySelector('.popup_type_edit');
const inputName = editProfile.querySelector('.popup__input_type_name');
const inputDescription = editProfile.querySelector('.popup__input_type_description');
const title = document.querySelector('.profile__title');
const description = document.querySelector('.profile__description');
editProfile.addEventListener('submit', handleFormSubmit);
export function handleFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = inputName.value;
  description.textContent = inputDescription.value;
  closeForms(editProfile);
}

/* окно картинок */
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
function openImage(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
};