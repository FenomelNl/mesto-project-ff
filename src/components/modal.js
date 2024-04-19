document.addEventListener('click', openPopup);
document.addEventListener('click', closePopup);

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewcard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const name = document.querySelector('.popup__input_type_name');
const description = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

export function openPopup(evt) {
    if (evt.target.classList.contains('profile__edit-button')) {
        name.value = profileTitle.textContent;
        description.value = profileDescription.textContent;
        popupTypeEdit.classList.add('popup_is-opened');
        addEvents();
    }
    if (evt.target.classList.contains('profile__add-button')) {
        popupTypeNewcard.classList.add('popup_is-opened');
        addEvents();
    }
    if (evt.target.classList.contains('card__image')) {
        popupTypeImage.classList.add('popup_is-opened');
        addEvents();
    }
}

function addEvents() {
    document.addEventListener('click', clickByOverlay);
    document.addEventListener('keydown', closePopupByEsc);
}

export function closePopup(evt) {
    if (evt.target.classList.contains('popup__close')) {
        evt.target.closest('.popup_is-opened').classList.remove('popup_is-opened');
        removeEvents();
    }
}

function clickByOverlay(evt) {
    if (evt.target.classList.contains('popup_is-opened') && !evt.target.classList.contains('popup__content')) {
        document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
        removeEvents();
    }
}

function closePopupByEsc(evt) {
    if (evt.keyCode == 27) {
        document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
        removeEvents();
    }
}

export function closeForms() {
    document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
}

function removeEvents() {
    document.removeEventListener('click', clickByOverlay);
    document.removeEventListener('keydown', closePopupByEsc);
}

