ymaps.ready(function() {
 var myMap = new ymaps.Map('map', {
   center: [59.938587, 30.322954],
   zoom: 16
  }, {
   searchControlProvider: 'yandex#search'
  }),
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
   hintContent: 'Собственный значок метки',
  }, {
   iconLayout: 'default#image',
   // Своё изображение иконки метки.
   iconImageHref: 'img/pin.png',
   // Размеры метки.
   iconImageSize: [200, 130],
   // Смещение левого верхнего угла иконки относительно
   // её "ножки" (точки привязки).
   iconImageOffset: [-35, -130]
  });
 myMap.geoObjects
  .add(myPlacemark);
 myMap.setCenter([59.939001, 30.329037], 16);
});
var link = document.querySelector(".contacts_button");
var black = document.querySelector(".global-container");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback_close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=feedback-text]");
var storage = localStorage.getItem("login");
link.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.add("feedback-show");
 black.classList.add("black");
 if (storage) {
  login.value = storage;
 } else {
  login.focus();
 }
});
close.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.remove("feedback-show");
 black.classList.remove("black");
 popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value|| !text.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      black.classList.remove("black");
    }
});