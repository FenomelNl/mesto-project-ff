function addEvents() {
    document.addEventListener('keydown', closePopupByEsc);
}

function removeEvents() {
    document.removeEventListener('keydown', closePopupByEsc);
}

export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    addEvents();
}

export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    removeEvents();
}

const popupTypeEdit = document.querySelector('.popup_type_edit');
const name = document.querySelector('.popup__input_type_name');
const description = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
document.addEventListener('click', profileEdit);
function profileEdit(evt) {
    if (evt.target.classList.contains('profile__edit-button')) {
        name.value = profileTitle.textContent;
        description.value = profileDescription.textContent;
        openPopup(popupTypeEdit);
    }
}

const popupTypeNewcard = document.querySelector('.popup_type_new-card');
document.addEventListener('click', profileAdd);
function profileAdd(evt) {
    if (evt.target.classList.contains('profile__add-button')) {
        openPopup(popupTypeNewcard);
    }
}

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
            closePopup(popup);
        }
    });
});

function closePopupByEsc(evt) {
    if (evt.keyCode == 27) {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
}