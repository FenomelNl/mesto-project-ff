/* модальное окно редактирования профиля */
export const profileEditButton = document.querySelector('.profile__edit-button');
profileEditButton.addEventListener('click', function () {
    const name = document.querySelector('.popup__input_type_name');
    const description = document.querySelector('.popup__input_type_description');
    const popup = document.querySelector('.popup_type_edit');
    name.value = document.querySelector('.profile__title').textContent;
    description.value = document.querySelector('.profile__description').textContent;
    popup.classList.add('popup_is-opened');
});

/* модальное окно добавления картинки */
export const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', function () {
    const popup = document.querySelector('.popup_type_new-card');
    popup.classList.add('popup_is-opened');
});

/* закрытие модального окна крестиком */
export const popupClose = document.querySelectorAll('.popup__close');
popupClose.forEach(function (evt) {
    evt.addEventListener('click', function (evt) {
        const closestPopup = evt.target.closest('.popup');
        closestPopup.classList.remove('popup_is-opened');
    });
});

/* закрытие модального окна нажатие на фон */
document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_is-opened') && !evt.target.classList.contains('popup__content')) {
        const close = document.querySelector('.popup_is-opened');
        close.classList.remove('popup_is-opened');
    }
});

/* закрытие модального окна нажатием на Esc */
document.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
        const popup = document.querySelector('.popup_is-opened');
        popup.classList.remove('popup_is-opened');
    }
});

