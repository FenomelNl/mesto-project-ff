import './pages/index.css';
import { initialCards, createCard, deleteCard, likeCard } from './components/cards.js';
import { profileEditButton, profileAddButton, popupClose } from './components/modal.js';

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

const images = [
  { name: 'add icon', link: addIcon },
  { name: 'avatar', link: avatar },
  { name: 'card one', link: cardOne },
  { name: 'card two', link: cardTwo },
  { name: 'card three', link: cardThree },
  { name: 'close', link: close },
  { name: 'delete icon', link: deleteIcon },
  { name: 'edit icon', link: editIcon },
  { name: 'like active', link: likeActive },
  { name: 'like inactive', link: likeInactive },
  { name: 'logo', link: logo }
];

const placesList = document.querySelector('.places__list');
initialCards.forEach((newCard) => {
  const item = createCard(newCard, deleteCard, likeCard, openImage);
  placesList.appendChild(item);
});

/* добавление карточки */
const newCard = document.querySelector('.popup_type_new-card')
const newPlace = newCard.querySelector('.popup__form');
function formSubmit(evt) {
  evt.preventDefault();
  const item = {
    name: newPlace.querySelector('.popup__input_type_card-name').value,
    link: newPlace.querySelector('.popup__input_type_url').value
  }
  placesList.prepend(createCard(item, deleteCard, likeCard, openImage));
  newPlace.reset();
  newCard.classList.remove('popup_is-opened');
}
newPlace.addEventListener('submit', formSubmit);

/* редактирование профиля */
const editProfile = document.querySelector('.popup_type_edit');
function handleFormSubmit(evt) {
  evt.preventDefault();
  const inputName = editProfile.querySelector('.popup__input_type_name');
  const inputDescription = editProfile.querySelector('.popup__input_type_description');
  const title = document.querySelector('.profile__title');
  const description = document.querySelector('.profile__description');
  title.textContent = inputName.value;
  description.textContent = inputDescription.value;
  editProfile.classList.remove('popup_is-opened');
}
editProfile.addEventListener('submit', handleFormSubmit);

/* модальное окно картинок */
function openImage(evt) {
  placesList.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('card__image')) {
      const popupImage = document.querySelector('.popup__image');
      const popupCaption = document.querySelector('.popup__caption');
      popupImage.src = evt.target.src;
      popupImage.alt = evt.target.alt;
      popupCaption.textContent = evt.target.alt;
      const popup = document.querySelector('.popup_type_image');
      popup.classList.add('popup_is-opened');
    }
  });
}
